const app = angular.module('Offer', [])
app.controller('DataController', ['$scope', function ($scope) {
    $scope.currYear = getYear();
    
    function getYear(){
        var d = new Date();
        return d.getFullYear();
    }   
    
    $scope.data = {
        brand: {
            full: "Weight Balancer Forskolin",
            short: ""
        },
        url: "weight-balancer-forskolin.com",
        phone: "1-866-505-5884",
        phones2: "1-877-696-4026",
        email: "admin@weight-balancer-forskolin.com",
        returnAddress: {
            part1: "15568 Brookhurst St. #339, Westminster, CA 92683, United States"
            // part2: "Fountain Valley, CA 92708"
        },
        processing: {
            express: 1.99,
            standard: {
                cost: 0.00,
                text: "FREE"
            }
        },
        rebill: {
            trialLength: {
                trialDays: 10,
                shipping: 4,
                total: 14,
                totals2: 15
            },
            initial: 45,
            autoShip: 30
        }
    };
    
    $scope.downsell = "no";
    $scope.product_extra = "ShippingInsMain";
    $scope.shippingCost = 0.00;
    $scope.expressCost = 0.00;
    $scope.totalCost = 0.00;
  

    $scope.updateExpress = function (exp){
        if(exp == true){
            $scope.expressCost = $scope.data.processing.express;
        }
        else{
            $scope.expressCost = $scope.data.processing.standard.cost;
        }
        $scope.updateTotal();
    };
    
    $scope.updateShipping = function(ds){
        if(ds != 'yes'){
            $scope.shippingCost = $scope.S1.pricing.shipping.noDiscount;  
        }
        else{
            $scope.shippingCost = $scope.S1.pricing.shipping.discount;
        }
        $scope.updateTotal();
    };
    
    $scope.updateTotal = function(){
        $scope.totalCost = $scope.shippingCost + $scope.expressCost;
    };
    
    $scope.updateDownsell = function (ds){
        $scope.downsell = ds;
        $scope.updateShipping(ds);
    };
    
    
    $scope.S1 = {
        name: "Weight Balancer Forskolin",
        type: "",
        description: {
            sixBottles: "Buy 6 Bottles",
            fourBottles: "Buy 4 Bottles",
            twoBottles: "Buy 2 Bottles"
        },
        bottle:{
            sixBottles:"6 Bottles",
            fourBottles:"4 Bottles",
            twoBottles:"2 Bottles",
        },
        shipping:
           "Standard 3 -5 days",
        shippingPrice:{
            free:"FREE",
            cost:4.95,
        },
        total:{
            sixBottles:539.94,
            fourBottles:359.96,
            twoBottles:179.98,
            twoBottlesPlusShipping: 184.93,
        },
        hashtag: "#WeightBalancerForskolin",
        mainBottle:"product-S1.png",
        bottleImg:{
            sixBottles:"cart6.png",
            fourBottles:"cart4.png",
            twoBottles:"cart2.png",
        },
        volume: "25ml",
        pricing: {
            sixBottles:{
                price: 539.94,
                save: 180.00
            },
            fiveBottles:{ 
                retail: 29.60,
                price: 148.00,
                save: 150.00
            },
            fourBottles:{ 
                price: 359.96,
                save: 100.00
            },
            threeBottles: {
                retail: 33.00,
                price: 99.00,
                save: 129.00
            },
            twoBottles: {
                retail: 179.98,
                save: 20.00,
                price: 179.98
            },
            oneBottles: {
                retail: 89.99,
                save: 20.00,
                price: 89.99
            },
            shipping: 4.95,
           
        }
    };
    
    $scope.S2 = {
        name: "Lean Pulse Garcinia",
        type: "",
        description: "",
        hashtag: "Lean Pulse Garcinia",
        bottleImg: "product-S2.png",
        pricing: {
            product: 87.99
        },
        supply: 30,
        volume: "15ml"
    };
    
    $scope.S3 = {
        name: "Eminence Restorative Cream",
        type: "Eye Serum",
        hashtag: "Eminence Restorative Cream",
        bottleImg: "product-S3.png",
        pricing: {
            product: 19.99,
            regular:39.98,
        },
        supply: 30,
        volume: "15ml"
    };
    
    // 0.15, 0.30
    $scope.rebill = function(price, percent){
        return price - (price * percent);
    };
}]);