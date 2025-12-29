
export const getInstantRules = () => [
    { label: 'Daily Drawdown', val: '4%' },
    { label: 'Max Drawdown', val: '7%' },
    { label: 'Payout Frequency', val: 'Weekly' },
    { label: 'Rewards Split', val: '80%' },
    { label: 'Trading Leverage', val: 'Up to 1:100' },
    { label: 'Instruments', val: 'Fx, Commodities, Indices, Stock, Crypto' },
    { label: 'Weekend Trading', val: 'Allowed' },
    { label: 'Consistency Rule', val: 'Yes' },
    { label: '1% Max Floating Rule', val: 'Yes' }
];

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const getDailyPayoutsRules = (data: any) => [
    { label: 'Profit Target', s1: data.target1, s2: data.target2, funded: '-' },
    { label: 'Daily Drawdown', s1: data.dailyLoss, s2: data.dailyLoss, funded: data.dailyLoss },
    { label: 'Max Drawdown', s1: data.maxLoss, s2: data.maxLoss, funded: data.maxLoss },
    { label: 'Payout Frequency', s1: '-', s2: '-', funded: 'Daily' },
    { label: 'Trading Leverage', s1: 'upto 1:100', s2: 'upto 1:100', funded: 'upto 1:100' },
    { label: 'Instruments', s1: 'Fx, Commodities, Indices, Stock, Crypto', s2: 'Fx, Commodities, Indices, Stock, Crypto', funded: 'Fx, Commodities, Indices, Stock, Crypto' },
    { label: 'Weekend Trading', s1: 'Allowed', s2: 'Allowed', funded: 'Allowed' },
    { label: 'Consistency Rule', s1: '-', s2: '-', funded: '-' },
    { label: '1% Max Floating Rule', s1: '-', s2: '-', funded: 'Yes' }
];

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const getStandardRules = (data: any) => [
    { label: 'Profit Target', s1: data.target1, s2: data.target2, funded: '-' },
    { label: 'Profit Split', s1: '-', s2: '-', funded: '80%' },
    { label: 'Daily Drawdown', s1: data.dailyLoss, s2: data.dailyLoss, funded: data.dailyLoss },
    { label: 'Max Drawdown', s1: data.maxLoss, s2: data.maxLoss, funded: data.maxLoss },
    { label: 'Payout Frequency', s1: '-', s2: '-', funded: 'Weekly' },
    { label: 'Trading Period', s1: 'Unlimited', s2: 'Unlimited', funded: 'Indefinite' },
    { label: 'Trading Leverage', s1: '1:100', s2: '1:100', funded: '1:100' },
    { label: 'Instruments', s1: 'Fx, Commodities, Indices, Stock, Crypto', s2: 'Fx, Commodities, Indices, Stock, Crypto', funded: 'Fx, Commodities, Indices, Stock, Crypto' },
    { label: 'Weekend Trading', s1: 'Allowed', s2: 'Allowed', funded: 'Allowed' },
    { label: 'Consistency Rule', s1: '-', s2: '-', funded: '-' },
    { label: '1% Max Floating Rule', s1: '-', s2: '-', funded: 'Yes' },
];
