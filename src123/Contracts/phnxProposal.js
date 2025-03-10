export const PHNX_PROPOSAL_ADDRESS =
  "0x2c1A4C3c1bcb1eE2CCFF5eB53348CA0D028AEb6d";
export const PHNX_PROPOSAL_ABI = 
[
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "newOwner",
        "type": "address"
      }
    ],
    "name": "AddedSubOwner",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "string",
        "name": "_proposalId",
        "type": "string"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "_collateralAmount",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "address",
        "name": "_proposer",
        "type": "address"
      }
    ],
    "name": "CollateralDeposited",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "string",
        "name": "_proposalId",
        "type": "string"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "_collateralAmount",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "address",
        "name": "_proposer",
        "type": "address"
      }
    ],
    "name": "ColleteralWithdrawn",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "string",
        "name": "_proposalId",
        "type": "string"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "_completedMilestones",
        "type": "uint256"
      }
    ],
    "name": "CompletedMilestone",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "string",
        "name": "_proposalId",
        "type": "string"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "_amountReleased",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "address",
        "name": "_admin",
        "type": "address"
      }
    ],
    "name": "FundsReleased",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "previousOwner",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "newOwner",
        "type": "address"
      }
    ],
    "name": "OwnershipTransferred",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "account",
        "type": "address"
      }
    ],
    "name": "Paused",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "string",
        "name": "_proposalId",
        "type": "string"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "_previousStatus",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "_newStatus",
        "type": "uint256"
      }
    ],
    "name": "ProposalStatusUpdated",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "fundsRequested",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "initiationTimestamp",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "completionTimestamp",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "colletralAmount",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "totalMilestones",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "status",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "totalVotes",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "address",
        "name": "proposer",
        "type": "address"
      }
    ],
    "name": "ProposalSubmitted",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "newOwner",
        "type": "address"
      }
    ],
    "name": "RemovedSubOwner",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "account",
        "type": "address"
      }
    ],
    "name": "Unpaused",
    "type": "event"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "newOwner",
        "type": "address"
      }
    ],
    "name": "addOwner",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "collateralAmount",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "getBaseInterest",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_phoenixContractAddress",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "_phnxStakingContractAddress",
        "type": "address"
      }
    ],
    "name": "initialize",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "name": "isOwner",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "_proposalId",
        "type": "string"
      },
      {
        "internalType": "uint256",
        "name": "_amount",
        "type": "uint256"
      }
    ],
    "name": "issueFunds",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "owner",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "pause",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "paused",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "phnxContractAddress",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "phnxStakingContractAddress",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      }
    ],
    "name": "proposalList",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "fundsRequested",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "initiationTimestamp",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "completionTimestamp",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "colletralAmount",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "totalMilestones",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "completedMilestones",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "status",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "totalVotes",
        "type": "uint256"
      },
      {
        "internalType": "address",
        "name": "proposer",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_subOwner",
        "type": "address"
      }
    ],
    "name": "removeOwner",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "renounceOwnership",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "fundsRequested",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "endTimestamp",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "colletralAmount",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "totalMilestones",
        "type": "uint256"
      },
      {
        "internalType": "string",
        "name": "_proposalId",
        "type": "string"
      }
    ],
    "name": "submitProposal",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "newOwner",
        "type": "address"
      }
    ],
    "name": "transferOwnership",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "unPause",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "_proposalId",
        "type": "string"
      },
      {
        "internalType": "uint256",
        "name": "_status",
        "type": "uint256"
      }
    ],
    "name": "updateProposalStatus",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "_proposalId",
        "type": "string"
      }
    ],
    "name": "withdrawCollateral",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  }
]
