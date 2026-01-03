export const pricingConfig = {
    Prime: {
        '5K': { price: '$59', dailyLoss: '4%', maxLoss: '10%', target1: '9%', target2: '6%' },
        '10K': { price: '$89', dailyLoss: '4%', maxLoss: '10%', target1: '9%', target2: '6%' },
        '25K': { price: '$236', dailyLoss: '4%', maxLoss: '10%', target1: '9%', target2: '6%' },
        '50K': { price: '$412', dailyLoss: '4%', maxLoss: '10%', target1: '9%', target2: '6%' },
        '100K': { price: '$610', dailyLoss: '4%', maxLoss: '10%', target1: '$9%', target2: '6%' },

    },
    LiteTwoStep: {
        '5K': { price: '$30', dailyLoss: '3%', maxLoss: '6%', target1: '6%', target2: '6%' },
        '10K': { price: '$55', dailyLoss: '3%', maxLoss: '6%', target1: '6%', target2: '6%' },
        '25K': { price: '$125', dailyLoss: '3%', maxLoss: '6%', target1: '6%', target2: '6%' },
        '50K': { price: '$235', dailyLoss: '3%', maxLoss: '6%', target1: '6%', target2: '6%' },
        '100K': { price: '$440', dailyLoss: '3%', maxLoss: '6%', target1: '6%', target2: '6%' },
    },
    LiteOneStep: {
        '5K': { price: '$48', dailyLoss: '3%', maxLoss: '6%', target1: '9%', target2: '-' },
        '10K': { price: '$70', dailyLoss: '3%', maxLoss: '6%', target1: '9%', target2: '-' },
        '25K': { price: '$150', dailyLoss: '3%', maxLoss: '6%', target1: '9%', target2: '-' },
        '50K': { price: '$260', dailyLoss: '3%', maxLoss: '6%', target1: '9%', target2: '-' },
        '100K': { price: '$550', dailyLoss: '3%', maxLoss: '6%', target1: '9%', target2: '-' },

    },
    InstantLite: {
        '3K': { price: '$34', dailyLoss: '-', maxLoss: '3%', target1: '8%', target2: '-', validity: '30 Days', consistencyRule: 'No' },
        '6K': { price: '$59', dailyLoss: '-', maxLoss: '3%', target1: '8%', target2: '-', validity: '30 Days', consistencyRule: 'No' },
        '12K': { price: '$89', dailyLoss: '-', maxLoss: '3%', target1: '8%', target2: '-', validity: '30 Days', consistencyRule: 'No' },
        '25K': { price: '$249', dailyLoss: '-', maxLoss: '3%', target1: '8%', target2: '-', validity: '30 Days', consistencyRule: 'No' },
        '50K': { price: '$499', dailyLoss: '-', maxLoss: '3%', target1: '8%', target2: '-', validity: '30 Days', consistencyRule: 'No' },
        '100K': { price: '$799', dailyLoss: '-', maxLoss: '3%', target1: '8%', target2: '-', validity: '30 Days', consistencyRule: 'No' },
    },
    InstantPrime: {
        '5K': { price: '$49', dailyLoss: '4%', maxLoss: '7%', target1: '-', target2: '-', consistencyRule: 'Yes' },
        '10K': { price: '$83', dailyLoss: '4%', maxLoss: '7%', target1: '-', target2: '-', consistencyRule: 'Yes' },
        '25K': { price: '$199', dailyLoss: '4%', maxLoss: '7%', target1: '-', target2: '-', consistencyRule: 'Yes' },
        '50K': { price: '$350', dailyLoss: '4%', maxLoss: '7%', target1: '-', target2: '-', consistencyRule: 'Yes' },
        '100K': { price: '$487', dailyLoss: '4%', maxLoss: '7%', target1: '-', target2: '-', consistencyRule: 'Yes' },
    }
};

