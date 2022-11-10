pragma solidity >=0.4.25 <0.9.0;
pragma experimental ABIEncoderV2;
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

contract HelloBlockchain {
    struct token {
        address token;
        uint256 balance;
    }

    token[] res;

    function getBalances(address walletAddress, address[] memory tokenAddress) public returns(token[] memory){
        for (uint i = 0; i < tokenAddress.length; i++) {
            // (bool success, bytes memory data) = address(tokenAddress[i]).call(abi.encodeWithSignature("balanceOf(address)", walletAddress));
            // uint256 amount = abi.decode(data, (uint256));
            uint256 amount = IERC20(tokenAddress[i]).balanceOf(walletAddress);
            res.push(token(tokenAddress[i], amount));
        }
        return res;
    }
}
