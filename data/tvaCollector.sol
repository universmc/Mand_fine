// SPDX-License-Identifier: GNU umcTolens umc
pragma solidity ^0.8.0;

contract TVACollector {
    address public owner;
    mapping(address => uint256) public balances;
    uint256 public totalCollected;

    event PaymentReceived(address indexed payer, uint256 amount);
    event Withdrawal(address indexed recipient, uint256 amount);

    modifier onlyOwner() {
        require(msg.sender == owner, "Only the owner can perform this action");
        _;
    }

    constructor() {
        owner = msg.sender;
    }

    // Function to collect TVA payments
    function payTVA() public payable {
        require(msg.value > 0, "Payment must be greater than zero");
        balances[msg.sender] += msg.value;
        totalCollected += msg.value;
        emit PaymentReceived(msg.sender, msg.value);
    }

    // Function to check the balance of an account
    function checkBalance(address account) public view returns (uint256) {
        return balances[account];
    }

    // Function for the owner to withdraw funds
    function withdrawFunds(uint256 amount) public onlyOwner {
        require(amount <= address(this).balance, "Insufficient contract balance");
        payable(owner).transfer(amount);
        emit Withdrawal(owner, amount);
    }

    // Function to get the contract balance
    function getContractBalance() public view returns (uint256) {
        return address(this).balance;
    }
}
