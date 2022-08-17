(function (window, k) {
    if (!window.AppstleMembershipIncluded && (!urlIsProductPage() || 'V1' === 'V2')) {
      window.AppstleMembershipIncluded = true;
      appstleLoadScript = function (src, callback) {
        var script = document.createElement("script");
        script.charset = "utf-8";
        script.async = true;
        script.src = src;
        script.onload = script.onreadystatechange = function () {
          if (!script.readyState || /loaded|complete/.test(script.readyState)) {
            script.onload = script.onreadystatechange = null;
            script = k;
            callback && callback();
          }
        };
        document.getElementsByTagName("head")[0].appendChild(script)
      };
      appstleLoadScript("https://cdn.shopify.com/s/files/1/0654/1728/1793/t/2/assets/appstle-membership.js?v=1660723941");

      window.AM = Window.AM || {};
      AM.Config = {
        "selectors": {
            "payment_button_selectors": "form[action$='/cart/add'] .shopify-payment-button",
            "subscriptionLinkSelector": "",
            "atcButtonPlacement": "BEFORE",
            "subscriptionLinkPlacement": "BEFORE"
        },
        "useUrlWithCustomerId": false,
        "atcButtonSelector": "",
        "moneyFormat": "{% raw %}${{amount}}{% endraw %}",
        "oneTimePurchaseText": "One Time Purchase",
        "shop": "winehub-demo.myshopify.com",
        "deliveryText": "delivery",
        "purchaseOptionsText": "Membership Options",
        "manageSubscriptionButtonText": "Manage Membership",
        "subscriptionOptionText": "Join Now",
        "sellingPlanSelectTitle": "DELIVERY FREQUENCY",
        "subscriptionPriceDisplayText": "",
        "tooltipTitle": "Membership detail",
        "api_key": "wTfCZA1yi1O6",
        "showTooltipOnClick": "false",
        "tooltipDesctiption": "<strong>Have complete control of your memberships<\/strong><br\/><br\/>Skip, reschedule, edit, cancel deliveries anytime matching your needs.",
        "tooltipDescriptionOnPrepaidPlan": "<b>Prepaid Plan Details<\/b><\/br> Total price: {{totalPrice}} ( Price for every delivery: {{pricePerDelivery}})",
        "tooltipDescriptionOnMultipleDiscount": "<b>Discount Details<\/b><\/br> Initial discount is {{discountOne}} and then {{discountTwo}}",
        "tooltipDescriptionCustomization": "{{{defaultTooltipDescription}}} <\/br>  {{{prepaidDetails}}} <\/br> {{{discountDetails}}}",
        "orderStatusManageSubscriptionTitle": "Membership",
        "orderStatusManageSubscriptionDescription": "Continue to your account to view and manage your memberships. Please use the same email address that you used to buy the membership.",
        "orderStatusManageSubscriptionButtonText": "Manage your membership",
        "subscriptionOptionSelectedByDefault" : false,
        "totalPricePerDeliveryText" : "{{prepaidPerDeliveryPrice}}\/delivery",
        "memberOnlySellingPlansJson": {},
        "fieldsBySellingPlanId": "{\"gid:\/\/shopify\/SellingPlan\/1968996609\":\"[{\\\"label\\\":\\\"Favourite Colour\\\",\\\"type\\\":\\\"text\\\",\\\"required\\\":false,\\\"visible\\\":true}]\"}",
        "rulesByCustomerTag": "{\"test-membership\":[\"[{\\\"rule\\\":\\\"discount\\\",\\\"selector\\\":\\\"\\\",\\\"message\\\":\\\"\\\",\\\"path\\\":\\\"\\\",\\\"pathMatch\\\":\\\"contains\\\",\\\"discountCode\\\":\\\"1220743233793\\\",\\\"discountMessage\\\":\\\"20% off entire order \u2022 For Appstle - Test Membership customers\\\",\\\"discountUrl\\\":\\\"https:\/\/winehub-demo.myshopify.com\/discount\/MembersOnly20\\\",\\\"deliveryFrequency\\\":\\\"Monthly\\\",\\\"limitAccessType\\\":\\\"percentage-discount\\\",\\\"elementRestrictType\\\":\\\"url\\\",\\\"bucketCategory\\\":\\\"tags\\\",\\\"bucketCategoryValue\\\":\\\"\\\",\\\"discountPercentage\\\":\\\"20.00\\\",\\\"discountAmount\\\":\\\"\\\",\\\"discountCodeDetails\\\":{\\\"codeDiscountNode\\\":{\\\"__typename\\\":\\\"DiscountCodeNode\\\",\\\"id\\\":\\\"gid:\/\/shopify\/DiscountCodeNode\/1220743233793\\\",\\\"codeDiscount\\\":{\\\"__typename\\\":\\\"DiscountCodeBasic\\\",\\\"appliesOncePerCustomer\\\":false,\\\"asyncUsageCount\\\":0,\\\"codeCount\\\":1,\\\"codes\\\":{\\\"__typename\\\":\\\"DiscountRedeemCodeConnection\\\",\\\"edges\\\":[{\\\"__typename\\\":\\\"DiscountRedeemCodeEdge\\\",\\\"node\\\":{\\\"__typename\\\":\\\"DiscountRedeemCode\\\",\\\"code\\\":\\\"MembersOnly20\\\"}}]},\\\"createdAt\\\":\\\"2022-08-17T08:34:26Z\\\",\\\"customerGets\\\":{\\\"__typename\\\":\\\"DiscountCustomerGets\\\",\\\"items\\\":{\\\"__typename\\\":\\\"AllDiscountItems\\\",\\\"allItems\\\":true},\\\"value\\\":{\\\"__typename\\\":\\\"DiscountPercentage\\\",\\\"percentage\\\":0.2},\\\"appliesOnOneTimePurchase\\\":true,\\\"appliesOnSubscription\\\":true},\\\"customerSelection\\\":{\\\"__typename\\\":\\\"DiscountCustomerSavedSearches\\\"},\\\"endsAt\\\":null,\\\"shortSummary\\\":\\\"20% off entire order\\\",\\\"startsAt\\\":\\\"2022-08-17T08:34:26Z\\\",\\\"status\\\":\\\"ACTIVE\\\",\\\"summary\\\":\\\"20% off entire order \u2022 For Appstle - Test Membership customers\\\",\\\"title\\\":\\\"MembersOnly20\\\",\\\"usageLimit\\\":null,\\\"shareableUrls\\\":[{\\\"__typename\\\":\\\"DiscountShareableUrl\\\",\\\"targetItemImage\\\":null,\\\"targetType\\\":\\\"HOME\\\",\\\"title\\\":\\\"Homepage\\\",\\\"url\\\":\\\"https:\/\/winehub-demo.myshopify.com\/discount\/MembersOnly20\\\"}]}}},\\\"membershipName\\\":\\\"Test Membership\\\",\\\"discountCodeText\\\":\\\"MembersOnly20\\\"}]\"]}",
        "membershipByCustomerTag": "{\"test-membership\":[{\"id\":2688,\"shop\":\"winehub-demo.myshopify.com\",\"groupName\":\"Test Membership\",\"subscriptionId\":581304577,\"productCount\":0,\"productVariantCount\":0,\"infoJson\":\"{\\\"id\\\":581304577,\\\"productCount\\\":0,\\\"productVariantCount\\\":null,\\\"subscriptionPlans\\\":[{\\\"frequencyCount\\\":1,\\\"frequencyInterval\\\":\\\"MONTH\\\",\\\"billingFrequencyCount\\\":1,\\\"billingFrequencyInterval\\\":\\\"MONTH\\\",\\\"frequencyName\\\":\\\"Monthly\\\",\\\"discountOffer\\\":null,\\\"discountOffer2\\\":null,\\\"afterCycle1\\\":0,\\\"afterCycle2\\\":0,\\\"discountType\\\":null,\\\"discountType2\\\":null,\\\"discountEnabled\\\":false,\\\"discountEnabled2\\\":false,\\\"discountEnabledMasked\\\":false,\\\"discountEnabled2Masked\\\":false,\\\"id\\\":\\\"gid:\/\/shopify\/SellingPlan\/1968996609\\\",\\\"frequencyType\\\":\\\"ON_PURCHASE_DAY\\\",\\\"specificDayValue\\\":null,\\\"specificDayEnabled\\\":false,\\\"maxCycles\\\":null,\\\"minCycles\\\":null,\\\"cutOff\\\":0,\\\"prepaidFlag\\\":\\\"false\\\",\\\"idNew\\\":\\\"gid:\/\/shopify\/SellingPlan\/1968996609\\\",\\\"planType\\\":\\\"PAY_AS_YOU_GO\\\",\\\"deliveryPolicyPreAnchorBehavior\\\":\\\"ASAP\\\"}],\\\"groupName\\\":\\\"Test Membership\\\",\\\"productIds\\\":\\\"[]\\\",\\\"productId\\\":null,\\\"variantIds\\\":\\\"[]\\\",\\\"accessoryProductIds\\\":null,\\\"customerTag\\\":\\\"test-membership\\\",\\\"orderTag\\\":\\\"test-member-order\\\",\\\"rulesJson\\\":\\\"[{\\\\\\\"rule\\\\\\\":\\\\\\\"discount\\\\\\\",\\\\\\\"selector\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"message\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"path\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"pathMatch\\\\\\\":\\\\\\\"contains\\\\\\\",\\\\\\\"discountCode\\\\\\\":\\\\\\\"1220743233793\\\\\\\",\\\\\\\"discountMessage\\\\\\\":\\\\\\\"20% off entire order \u2022 For Appstle - Test Membership customers\\\\\\\",\\\\\\\"discountUrl\\\\\\\":\\\\\\\"https:\/\/winehub-demo.myshopify.com\/discount\/MembersOnly20\\\\\\\",\\\\\\\"deliveryFrequency\\\\\\\":\\\\\\\"Monthly\\\\\\\",\\\\\\\"limitAccessType\\\\\\\":\\\\\\\"percentage-discount\\\\\\\",\\\\\\\"elementRestrictType\\\\\\\":\\\\\\\"url\\\\\\\",\\\\\\\"bucketCategory\\\\\\\":\\\\\\\"tags\\\\\\\",\\\\\\\"bucketCategoryValue\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"discountPercentage\\\\\\\":\\\\\\\"20.00\\\\\\\",\\\\\\\"discountAmount\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"discountCodeDetails\\\\\\\":{\\\\\\\"codeDiscountNode\\\\\\\":{\\\\\\\"__typename\\\\\\\":\\\\\\\"DiscountCodeNode\\\\\\\",\\\\\\\"id\\\\\\\":\\\\\\\"gid:\/\/shopify\/DiscountCodeNode\/1220743233793\\\\\\\",\\\\\\\"codeDiscount\\\\\\\":{\\\\\\\"__typename\\\\\\\":\\\\\\\"DiscountCodeBasic\\\\\\\",\\\\\\\"appliesOncePerCustomer\\\\\\\":false,\\\\\\\"asyncUsageCount\\\\\\\":0,\\\\\\\"codeCount\\\\\\\":1,\\\\\\\"codes\\\\\\\":{\\\\\\\"__typename\\\\\\\":\\\\\\\"DiscountRedeemCodeConnection\\\\\\\",\\\\\\\"edges\\\\\\\":[{\\\\\\\"__typename\\\\\\\":\\\\\\\"DiscountRedeemCodeEdge\\\\\\\",\\\\\\\"node\\\\\\\":{\\\\\\\"__typename\\\\\\\":\\\\\\\"DiscountRedeemCode\\\\\\\",\\\\\\\"code\\\\\\\":\\\\\\\"MembersOnly20\\\\\\\"}}]},\\\\\\\"createdAt\\\\\\\":\\\\\\\"2022-08-17T08:34:26Z\\\\\\\",\\\\\\\"customerGets\\\\\\\":{\\\\\\\"__typename\\\\\\\":\\\\\\\"DiscountCustomerGets\\\\\\\",\\\\\\\"items\\\\\\\":{\\\\\\\"__typename\\\\\\\":\\\\\\\"AllDiscountItems\\\\\\\",\\\\\\\"allItems\\\\\\\":true},\\\\\\\"value\\\\\\\":{\\\\\\\"__typename\\\\\\\":\\\\\\\"DiscountPercentage\\\\\\\",\\\\\\\"percentage\\\\\\\":0.2},\\\\\\\"appliesOnOneTimePurchase\\\\\\\":true,\\\\\\\"appliesOnSubscription\\\\\\\":true},\\\\\\\"customerSelection\\\\\\\":{\\\\\\\"__typename\\\\\\\":\\\\\\\"DiscountCustomerSavedSearches\\\\\\\"},\\\\\\\"endsAt\\\\\\\":null,\\\\\\\"shortSummary\\\\\\\":\\\\\\\"20% off entire order\\\\\\\",\\\\\\\"startsAt\\\\\\\":\\\\\\\"2022-08-17T08:34:26Z\\\\\\\",\\\\\\\"status\\\\\\\":\\\\\\\"ACTIVE\\\\\\\",\\\\\\\"summary\\\\\\\":\\\\\\\"20% off entire order \u2022 For Appstle - Test Membership customers\\\\\\\",\\\\\\\"title\\\\\\\":\\\\\\\"MembersOnly20\\\\\\\",\\\\\\\"usageLimit\\\\\\\":null,\\\\\\\"shareableUrls\\\\\\\":[{\\\\\\\"__typename\\\\\\\":\\\\\\\"DiscountShareableUrl\\\\\\\",\\\\\\\"targetItemImage\\\\\\\":null,\\\\\\\"targetType\\\\\\\":\\\\\\\"HOME\\\\\\\",\\\\\\\"title\\\\\\\":\\\\\\\"Homepage\\\\\\\",\\\\\\\"url\\\\\\\":\\\\\\\"https:\/\/winehub-demo.myshopify.com\/discount\/MembersOnly20\\\\\\\"}]}}},\\\\\\\"membershipName\\\\\\\":\\\\\\\"Test Membership\\\\\\\",\\\\\\\"discountCodeText\\\\\\\":\\\\\\\"MembersOnly20\\\\\\\"}]\\\",\\\"formFieldsJson\\\":\\\"[{\\\\\\\"label\\\\\\\":\\\\\\\"Favourite Colour\\\\\\\",\\\\\\\"type\\\\\\\":\\\\\\\"text\\\\\\\",\\\\\\\"required\\\\\\\":false,\\\\\\\"visible\\\\\\\":true}]\\\"}\",\"productIds\":\"\",\"variantIds\":\"\",\"variantProductIds\":\"\",\"customerTag\":\"test-membership\",\"orderTag\":\"test-member-order\",\"rulesJson\":\"[{\\\"rule\\\":\\\"discount\\\",\\\"selector\\\":\\\"\\\",\\\"message\\\":\\\"\\\",\\\"path\\\":\\\"\\\",\\\"pathMatch\\\":\\\"contains\\\",\\\"discountCode\\\":\\\"1220743233793\\\",\\\"discountMessage\\\":\\\"20% off entire order \u2022 For Appstle - Test Membership customers\\\",\\\"discountUrl\\\":\\\"https:\/\/winehub-demo.myshopify.com\/discount\/MembersOnly20\\\",\\\"deliveryFrequency\\\":\\\"Monthly\\\",\\\"limitAccessType\\\":\\\"percentage-discount\\\",\\\"elementRestrictType\\\":\\\"url\\\",\\\"bucketCategory\\\":\\\"tags\\\",\\\"bucketCategoryValue\\\":\\\"\\\",\\\"discountPercentage\\\":\\\"20.00\\\",\\\"discountAmount\\\":\\\"\\\",\\\"discountCodeDetails\\\":{\\\"codeDiscountNode\\\":{\\\"__typename\\\":\\\"DiscountCodeNode\\\",\\\"id\\\":\\\"gid:\/\/shopify\/DiscountCodeNode\/1220743233793\\\",\\\"codeDiscount\\\":{\\\"__typename\\\":\\\"DiscountCodeBasic\\\",\\\"appliesOncePerCustomer\\\":false,\\\"asyncUsageCount\\\":0,\\\"codeCount\\\":1,\\\"codes\\\":{\\\"__typename\\\":\\\"DiscountRedeemCodeConnection\\\",\\\"edges\\\":[{\\\"__typename\\\":\\\"DiscountRedeemCodeEdge\\\",\\\"node\\\":{\\\"__typename\\\":\\\"DiscountRedeemCode\\\",\\\"code\\\":\\\"MembersOnly20\\\"}}]},\\\"createdAt\\\":\\\"2022-08-17T08:34:26Z\\\",\\\"customerGets\\\":{\\\"__typename\\\":\\\"DiscountCustomerGets\\\",\\\"items\\\":{\\\"__typename\\\":\\\"AllDiscountItems\\\",\\\"allItems\\\":true},\\\"value\\\":{\\\"__typename\\\":\\\"DiscountPercentage\\\",\\\"percentage\\\":0.2},\\\"appliesOnOneTimePurchase\\\":true,\\\"appliesOnSubscription\\\":true},\\\"customerSelection\\\":{\\\"__typename\\\":\\\"DiscountCustomerSavedSearches\\\"},\\\"endsAt\\\":null,\\\"shortSummary\\\":\\\"20% off entire order\\\",\\\"startsAt\\\":\\\"2022-08-17T08:34:26Z\\\",\\\"status\\\":\\\"ACTIVE\\\",\\\"summary\\\":\\\"20% off entire order \u2022 For Appstle - Test Membership customers\\\",\\\"title\\\":\\\"MembersOnly20\\\",\\\"usageLimit\\\":null,\\\"shareableUrls\\\":[{\\\"__typename\\\":\\\"DiscountShareableUrl\\\",\\\"targetItemImage\\\":null,\\\"targetType\\\":\\\"HOME\\\",\\\"title\\\":\\\"Homepage\\\",\\\"url\\\":\\\"https:\/\/winehub-demo.myshopify.com\/discount\/MembersOnly20\\\"}]}}},\\\"membershipName\\\":\\\"Test Membership\\\",\\\"discountCodeText\\\":\\\"MembersOnly20\\\"}]\",\"formFieldsJson\":\"[{\\\"label\\\":\\\"Favourite Colour\\\",\\\"type\\\":\\\"text\\\",\\\"required\\\":false,\\\"visible\\\":true}]\",\"savedSearchId\":\"gid:\/\/shopify\/SavedSearch\/2379588894977\"}]}",
        "nonMemberOnlySellingPlansJson": {},
        "widgetEnabled": true,
        "showTooltip" : true,
        "sortByDefaultSequence": false,
        "showSubOptionBeforeOneTime": false,
        "showStaticTooltip": false,
        "showAppstleLink": false,
        "sellingPlanTitleText" : "{{sellingPlanName}} ({{sellingPlanPrice}}\/delivery)",
        "oneTimePriceText" : "{{price}}",
        "selectedPayAsYouGoSellingPlanPriceText" : "{{price}}",
        "selectedPrepaidSellingPlanPriceText" : "{{pricePerDelivery}}",
        "selectedDiscountFormat" : "SAVE {{selectedDiscountPercentage}}",
        "manageSubscriptionBtnFormat" : "<a href='apps\/memberships' class='appstle_manageSubBtn' ><button class='btn' style='padding: 2px 20px'>Manage Membership<\/button><a><br><br>",
        "manageSubscriptionUrl" : "apps\/memberships",
        "appstlePlanId": 1,
        "showCheckoutSubscriptionBtn": true,
        "disableLoadingJquery": false,
        "enableMessagingForNonMembers": "false",
        "nonMemberMessaging": "Please login to avail the membership perks.",
        "showMembershipBanner": "true",
        "showDiscountWidget": "false",
        "discountBadgeImageLink": "",
        "widgetBadgeImageLink": "",
        "productPagePriceDescriptionBlockPriceSelector": "",
        "productPagePriceDescriptionBlockParentSelector": "",
        "priceBlockSelector": "",
        "parentSelector": "",
        "css": {
            "appstle_membership_widget": {
                "margin-top": "" ,
                "margin-bottom": "",
            },

            "appstle_membership_wrapper": {
                "border-width": "",
                "border-color": "",
            },

            "appstle_circle": {
                "border-color": "",
            },

            "appstle_dot": {
                "background-color": "",
            },

            "appstle_select": {
                "padding-top": "",
                "padding-bottom": "",
                "padding-left": "",
                "padding-right": "",
                "border-width": "",
                "border-style": "",
                "border-color": "",
                "border-radius": "",
            },

            "tooltip_subscription_svg": {
                "fill": "",
            },

            "appstle_tooltip": {
                "color": "",
                "background-color": "",
            },

            "appstle_tooltip_border_top_color": {
                "border-top-color": "",
            },

            "appstle_membership_final_price": {
                "color": "",
            },
            "appstle_widget_text_color": {
                "color": "",
            },
            "appstle_selected_background": {
                "background": "transparent",
            },
            "customCSS": "",
            "customerPortalCss": "",
            "priceSelector": "",
            "landingPagePriceSelector": "",
            "quickViewClickSelector": "",
            "badgeTop": "",
            "pricePlacement": "BEFORE",
        }
      };

    }

    function urlIsProductPage() {
    // return null != decodeURIComponent(window.location.pathname).match(/\/products\/(([a-zA-Z0-9]|[\-\.\_\~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[\ud83c\ud83d\ud83e][\ud000-\udfff]){1,})\/?/)
    return decodeURIComponent(window.location.pathname).includes('/products/');
    }
  }
)(window);
