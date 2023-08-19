/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
let canCompleteCircuit = function (gas, cost) {
    const n = gas.length;

    let totalGas = 0;
    let currentGas = 0;
    let startingStation = 0;

    for (let i = 0; i < n; i++) {
        totalGas += gas[i] - cost[i];
        currentGas += gas[i] - cost[i];

        if (currentGas < 0) {
            startingStation = i + 1;
            currentGas = 0;
        }
    }

    return totalGas >= 0 ? startingStation : -1;
};