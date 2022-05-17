import React, { useEffect, useState } from "react";
import {
  Container,
  Modal,
  ModalBody,
  Row,
  Col,
  Stack,
  Button,
  ModalHeader,
} from "react-bootstrap";
import { Language, Strings } from "../Assets/Strings";
import CasePickerModal from "./CasePickerModal";
import CasePickerDemo from "./CasePickerDemo";
import CasePickerSummary from "./CasePickerSummary";

export const CasePickerBody = () => {
  const cur = Strings[Language].CasePickerBody;
  const SubheadingText = cur["SubheadingText"];
  const SubheadingEmphasis = cur["SubheadingEmphasis"];

  const red = "#770d88";
  const white = "#e2faab";
  const fort = "#951f03";
  const champ = "#fcffc3";

  //this is selected slots
  const Wines = [
    {
      key: 0,
      selected: false,
      wineObject: null,
    },
    {
      key: 1,
      selected: false,
      wineObject: null,
    },
    {
      key: 2,
      selected: false,
      wineObject: null,
    },
    {
      key: 3,
      selected: false,
      wineObject: null,
    },
    {
      key: 4,
      selected: false,
      wineObject: null,
    },
    {
      key: 5,
      selected: false,
      wineObject: null,
    },
  ];

  const TypeCounts = {
    red: {
      key: "red",
      count: 0,
    },
    white: {
      key: "white",
      count: 0,
    },
    fortified: {
      key: "fortified",
      count: 0,
    },
  };

  const TypeLimits = {
    red: {
      key: "red",
      limit: 4,
    },
    white: {
      key: "white",
      limit: 3,
    },
    fortified: {
      key: "fortified",
      limit: 1,
    },
  };

  const [loading, setLoading] = useState(true);
  const [firstRun, setFirstRun] = useState(true);
  const [typeCounts, setTypeCounts] = useState(TypeCounts);
  const [showModal, setShowModal] = useState(false);
  const [wines, setWines] = useState(Wines);
  const [selectedSlot, setSelectedSlot] = useState(null);
  const [currentSlots, setCurrentSlots] = useState(0);
  const [defaultWines, setDefaultWines] = useState([]);
  const [stock, setStock] = useState([]);

  const maxSlots = 6;
  const caseType = "sixSlots";

  const endpoint =
    "https://howards-folly-wine.digitact.co.uk/test/api/casebuilder";
  let apiArgs = () => {
    let str=''
    wines.forEach((w, i) => {
      if(w.wineObject && w.wineObject.shopify_id) {
        if(i === 0) str += '?'
        else str += '&'
        
        str += 'selected[]='+w.wineObject.shopify_id
      }
    })
    return str
  };

  useEffect(() => {
    async function fillStock() {
      const fullPath = endpoint+apiArgs()
      fetch(fullPath)
        .then((response) => {
          if (response.ok) {
            return response.json();
          }
          throw response;
        })
        .then((data) => {
          setDefaultWines(data.default);
          setStock(data.products);
        })
        .catch((error) => {
          console.error(error);
        })
        .finally(() => {
          setLoading(false);
        });
    }

    fillStock();
  }, [selectedSlot]);

  const selectWineSlot = (e, clicked) => {
    e.preventDefault();
    if (selectedSlot !== null) selectedSlot.selected = false;
    clicked.selected = true;
    setShowModal(true);
    setSelectedSlot(clicked);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const doReplace = (index, replacement) => {
//      let t = { ...typeCounts };

//      if (selectedSlot.wineObject && selectedSlot.wineObject.type !== null) t[selectedSlot.type].count--;
//      if (replacement.type !== null) t[replacement.type].count++;
//      setTypeCounts(t);

    let temp = { ...wines[index] };
    temp.title = replacement.title;
    temp.vintage = replacement.vintage;
    temp.max = replacement.max;
    temp.min = replacement.min;
    temp.image = replacement.image;
    temp.price_adjustment = replacement.price_adjustment;
    temp.shopify_id = replacement.shopify_id;
    //temp.type = replacement.type; //TODO: This isn't coming in from the API yet
    //temp.colour = replacement.colour; //This is local for now as well

    let tempwines = wines;
    tempwines[wines[index].key].wineObject = replacement;

    setWines(tempwines);
    setSelectedSlot(temp);
  }

  const replaceWineSlot = (e, replacement, quantity = 1) => {
    e.preventDefault();
    if (selectedSlot !== null) {
      let nextSlot = selectedSlot.key

      for(let i = 0; i < quantity; i++) {
        if(i !== 0) {
          //find the next free slot
          let found = false
          wines.forEach((o, j) => {
            if(i !== j) {
              if(o.wineObject === null || o.wineObject.shopify_id === null) {
                found = true
                doReplace(j, replacement)
              }
            }
          })

          //no empty spot found? Just replace spot 0
          if(!found) {
            nextSlot++
            if(nextSlot === maxSlots) {
              nextSlot = 0
            }
          }
        }
        else {
          doReplace(nextSlot, replacement)
      }
      }
    }



    let c = 0;

    for (let i = 0; i < wines.length; i++) {
      if (
        wines[i].wineObject !== null &&
        wines[i].wineObject.shopify_id !== null
      ) {
        c++;
      }
    }

    setCurrentSlots(c);

    closeModal();
  };

  if (loading) {
    return <p>'Loading casepicker...'</p>;
  }

  if(firstRun && defaultWines) {
    setFirstRun(false)
    //on the first run through we want to populate the case with any defaults mandated by the vendor
    defaultWines.forEach((w, i) => {
      doReplace(i, w)
    })
  }

  return (
    <Row className="background m-0">
      <Row className="ps-5 pt-5 pb-5">

        <Row className="text-left">
          <CasePickerModal
            showModal={showModal}
            closeModal={closeModal}
            replaceWineSlot={replaceWineSlot}
            selectedSlot={selectedSlot}
            currentSlots={currentSlots}
            maxSlots={maxSlots}
            typeCounts={typeCounts}
            typeLimits={TypeLimits}
            stock={stock}
            recommendations={stock}
          />

          
              <Col md={8}>
                <CasePickerDemo
                  width={300}
                  height={250}
                  caseType={caseType}
                  selectedSlot={selectedSlot}
                  onWineSwapped={replaceWineSlot}
                  onSelectedSlot={selectWineSlot}
                  wineSelection={wines}
                  typeCounts={typeCounts}
                />
              </Col>

              <Col md={4}>
                <CasePickerSummary wineSelection={wines} />
              </Col>
        </Row>
      </Row>
    </Row>
  );
};
