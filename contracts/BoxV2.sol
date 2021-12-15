pragma solidity ^0.8.0;

contract Box {
    uint256 private value;

    //emitted when the stored value changes
    event ValueChanged(uint256 newValue);

    //Stores a new value in the contract
    function store(uint256 newValue) public {
        value = newValue;
        emit ValueChanged(newValue);
    }

    //reads the last stored value
    function retrieve() public view returns (uint256) {
        return value;
    }

 //increments the stored value by 1 -- upgarded functionality 
    function increment() public {
        value = value + 1;
        emit ValueChanged(value);
    }
}
