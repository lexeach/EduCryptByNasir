const contractAddress = "0x54e4b1f2e4d3253e8a878612f3494a7e11477126";
const contractABI = [
  {
    inputs: [
      { internalType: "address", name: "stableCoin_", type: "address" },
      { internalType: "address", name: "token_", type: "address" },
      { internalType: "address", name: "exam_", type: "address" },
      { internalType: "uint256", name: "_baseTokenPrice", type: "uint256" },
      { internalType: "uint256", name: "_percentage", type: "uint256" },
      { internalType: "uint256", name: "_times", type: "uint256" },
      { internalType: "address payable", name: "_taxAddress", type: "address" },
      {
        internalType: "address payable",
        name: "_projectAddress",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "_refrer",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "_partner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "_level",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_pool",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_time",
        type: "uint256",
      },
    ],
    name: "AllPartnerLevelIncome",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: "address", name: "user", type: "address" },
      {
        indexed: false,
        internalType: "uint256",
        name: "level",
        type: "uint256",
      },
    ],
    name: "AllPartnerlevelUpgrade",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "_refrer",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "_user",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "_level",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_pool",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_time",
        type: "uint256",
      },
    ],
    name: "AlllevelIncome",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "_user",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "_referrer",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_time",
        type: "uint256",
      },
    ],
    name: "PartnerIncome",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: "address", name: "user", type: "address" },
      {
        indexed: false,
        internalType: "uint256",
        name: "level",
        type: "uint256",
      },
    ],
    name: "PartnerlevelUpgrade",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "_user",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "_referrer",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_time",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "string",
        name: "identity",
        type: "string",
      },
    ],
    name: "SponsorIncome",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: "address", name: "user", type: "address" },
      {
        indexed: false,
        internalType: "uint256",
        name: "level",
        type: "uint256",
      },
    ],
    name: "alllevelUpgrade",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "_user",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "_partner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "_level",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_time",
        type: "uint256",
      },
    ],
    name: "levelIncome",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: "address", name: "user", type: "address" },
      {
        indexed: false,
        internalType: "uint256",
        name: "level",
        type: "uint256",
      },
    ],
    name: "levelUpgrade",
    type: "event",
  },
  {
    inputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    name: "ALL_LEVEL_PRICE",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    name: "LEVEL_PRICE",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "RBCD",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "REGESTRATION_FESS",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "uint256", name: "_referrerID", type: "uint256" },
      { internalType: "uint256", name: "_coreferrerID", type: "uint256" },
      { internalType: "uint256", name: "_amount", type: "uint256" },
      { internalType: "string", name: "identity", type: "string" },
    ],
    name: "Registration",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "", type: "address" }],
    name: "TOP",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "uint256", name: "_level", type: "uint256" }],
    name: "UpgradeAllLevelOne",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{ internalType: "uint256", name: "_level", type: "uint256" }],
    name: "UpgradeAllLevelPartner",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{ internalType: "uint256", name: "_level", type: "uint256" }],
    name: "UpgradeAllLevelUser",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{ internalType: "uint256", name: "_level", type: "uint256" }],
    name: "UpgradePartnerLevel",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{ internalType: "uint256", name: "_level", type: "uint256" }],
    name: "UpgradeUserLevel",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "uint256", name: "_level", type: "uint256" },
      { internalType: "uint256", name: "_amount", type: "uint256" },
    ],
    name: "addPowerUser",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "uint256", name: "", type: "uint256" },
      { internalType: "address", name: "", type: "address" },
    ],
    name: "allHeightLevel",
    outputs: [
      { internalType: "uint256", name: "one", type: "uint256" },
      { internalType: "uint256", name: "two", type: "uint256" },
      { internalType: "uint256", name: "three", type: "uint256" },
      { internalType: "uint256", name: "four", type: "uint256" },
      { internalType: "uint256", name: "five", type: "uint256" },
      { internalType: "uint256", name: "six", type: "uint256" },
      { internalType: "uint256", name: "seven", type: "uint256" },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "uint256", name: "", type: "uint256" },
      { internalType: "address", name: "", type: "address" },
    ],
    name: "allPartnerHeightLevel",
    outputs: [
      { internalType: "uint256", name: "one", type: "uint256" },
      { internalType: "uint256", name: "two", type: "uint256" },
      { internalType: "uint256", name: "three", type: "uint256" },
      { internalType: "uint256", name: "four", type: "uint256" },
      { internalType: "uint256", name: "five", type: "uint256" },
      { internalType: "uint256", name: "six", type: "uint256" },
      { internalType: "uint256", name: "seven", type: "uint256" },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "uint256", name: "", type: "uint256" },
      { internalType: "address", name: "", type: "address" },
    ],
    name: "allPartnerUpgradePower",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "uint256", name: "", type: "uint256" },
      { internalType: "address", name: "", type: "address" },
    ],
    name: "allUserUpgradePower",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "", type: "address" }],
    name: "allpartnerTurnOver",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "uint256", name: "", type: "uint256" },
      { internalType: "address", name: "", type: "address" },
    ],
    name: "allpartnerUpgradeStatus",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "", type: "address" }],
    name: "alluserTurnOver",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "uint256", name: "", type: "uint256" },
      { internalType: "address", name: "", type: "address" },
    ],
    name: "alluserUpgradeStatus",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "currUserID",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "distributed",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "exam",
    outputs: [{ internalType: "contract Exam", name: "", type: "address" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getNextReward",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "", type: "address" }],
    name: "income",
    outputs: [
      { internalType: "uint256", name: "planer", type: "uint256" },
      { internalType: "uint256", name: "income", type: "uint256" },
      { internalType: "uint256", name: "levelIncomeReceived", type: "uint256" },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "isTopApproving",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "uint256", name: "", type: "uint256" },
      { internalType: "address", name: "", type: "address" },
    ],
    name: "levelCoRefrer",
    outputs: [{ internalType: "address", name: "", type: "address" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "uint256", name: "", type: "uint256" },
      { internalType: "address", name: "", type: "address" },
    ],
    name: "levelRefrer",
    outputs: [{ internalType: "address", name: "", type: "address" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "level_income",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "", type: "address" }],
    name: "levels",
    outputs: [
      { internalType: "uint256", name: "one", type: "uint256" },
      { internalType: "uint256", name: "two", type: "uint256" },
      { internalType: "uint256", name: "three", type: "uint256" },
      { internalType: "uint256", name: "four", type: "uint256" },
      { internalType: "uint256", name: "five", type: "uint256" },
      { internalType: "uint256", name: "six", type: "uint256" },
      { internalType: "uint256", name: "seven", type: "uint256" },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "ownerWallet",
    outputs: [{ internalType: "address", name: "", type: "address" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "", type: "address" }],
    name: "parLevels",
    outputs: [
      { internalType: "uint256", name: "one", type: "uint256" },
      { internalType: "uint256", name: "two", type: "uint256" },
      { internalType: "uint256", name: "three", type: "uint256" },
      { internalType: "uint256", name: "four", type: "uint256" },
      { internalType: "uint256", name: "five", type: "uint256" },
      { internalType: "uint256", name: "six", type: "uint256" },
      { internalType: "uint256", name: "seven", type: "uint256" },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "", type: "address" }],
    name: "partnerCount",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "partnerFee",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "", type: "address" }],
    name: "partnerID",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    name: "partnerNo",
    outputs: [{ internalType: "address", name: "", type: "address" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "", type: "address" }],
    name: "partnerTurnOver",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "uint256", name: "", type: "uint256" },
      { internalType: "address", name: "", type: "address" },
    ],
    name: "partnerUpgradeCount",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "uint256", name: "", type: "uint256" },
      { internalType: "address", name: "", type: "address" },
    ],
    name: "partnerUpgradePower",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "uint256", name: "", type: "uint256" },
      { internalType: "address", name: "", type: "address" },
    ],
    name: "partnerUpgradeStatus",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "partnrRefReq",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "uint256", name: "_amount", type: "uint256" }],
    name: "payPartnerFee",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "", type: "address" }],
    name: "regTime",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "reserve",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "sendBalance",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "_exam", type: "address" }],
    name: "setExamContract",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{ internalType: "uint256", name: "req", type: "uint256" }],
    name: "setPartRefReq",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address payable", name: "_newProject", type: "address" },
    ],
    name: "setProjectAddress",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "_token", type: "address" }],
    name: "setRegStableCoin",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{ internalType: "uint256", name: "fess", type: "uint256" }],
    name: "setRegistrationFess",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address payable", name: "_newTax", type: "address" },
    ],
    name: "setTaxAddress",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{ internalType: "uint256", name: "rate", type: "uint256" }],
    name: "setTaxRate",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{ internalType: "bool", name: "_status", type: "bool" }],
    name: "setTopApproving",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "uint256", name: "_fromLevel", type: "uint256" },
      { internalType: "uint256", name: "_toLevel", type: "uint256" },
    ],
    name: "siftAllPowerPartner",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "uint256", name: "_fromLevel", type: "uint256" },
      { internalType: "uint256", name: "_toLevel", type: "uint256" },
    ],
    name: "siftAllPowerUser",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "uint256", name: "_fromLevel", type: "uint256" },
      { internalType: "uint256", name: "_toLevel", type: "uint256" },
    ],
    name: "siftPowerPartner",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "uint256", name: "_fromLevel", type: "uint256" },
      { internalType: "uint256", name: "_toLevel", type: "uint256" },
    ],
    name: "siftPowerUser",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "sponsorReward",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "stableCoin",
    outputs: [{ internalType: "contract IBEP20", name: "", type: "address" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "taxRate",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "token",
    outputs: [{ internalType: "contract IBEP20", name: "", type: "address" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "tokenPrice",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "tokenReward",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalQulifiedUser",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "", type: "address" }],
    name: "totalReward",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "_newPartner", type: "address" }],
    name: "transferPartnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "_newPartner", type: "address" }],
    name: "transferPartnershipByAdmin",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    name: "userList",
    outputs: [{ internalType: "address", name: "", type: "address" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "", type: "address" }],
    name: "userTurnOver",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "uint256", name: "", type: "uint256" },
      { internalType: "address", name: "", type: "address" },
    ],
    name: "userUpgradeCount",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "uint256", name: "", type: "uint256" },
      { internalType: "address", name: "", type: "address" },
    ],
    name: "userUpgradePower",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "uint256", name: "", type: "uint256" },
      { internalType: "address", name: "", type: "address" },
    ],
    name: "userUpgradeStatus",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "", type: "address" }],
    name: "users",
    outputs: [
      { internalType: "bool", name: "isExist", type: "bool" },
      { internalType: "uint256", name: "id", type: "uint256" },
      { internalType: "uint256", name: "referrerID", type: "uint256" },
      { internalType: "uint256", name: "coreferrerID", type: "uint256" },
      { internalType: "uint256", name: "referredUsers", type: "uint256" },
      { internalType: "uint256", name: "coreferredUsers", type: "uint256" },
      { internalType: "uint256", name: "income", type: "uint256" },
      { internalType: "uint256", name: "levelIncomeReceived", type: "uint256" },
      { internalType: "uint256", name: "stageIncomeReceived", type: "uint256" },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address payable", name: "_to", type: "address" },
      { internalType: "uint256", name: "_amount", type: "uint256" },
    ],
    name: "withdrawalStableCoin",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];
const stableAddress = "0x0EB11261F9F778fEfd688e2dfAdB77862E96605b";
const stableABI = [
  { inputs: [], stateMutability: "nonpayable", type: "constructor" },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: "address", name: "from", type: "address" },
      { indexed: true, internalType: "address", name: "to", type: "address" },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "_unfreezer",
        type: "address",
      },
      { indexed: true, internalType: "address", name: "_to", type: "address" },
      {
        indexed: false,
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "Unfreeze",
    type: "event",
  },
  {
    inputs: [{ internalType: "address", name: "", type: "address" }],
    name: "_frozenBalance",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "owner", type: "address" },
      { internalType: "address", name: "spender", type: "address" },
    ],
    name: "allowance",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "spender", type: "address" },
      { internalType: "uint256", name: "amount", type: "uint256" },
    ],
    name: "approve",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "account", type: "address" }],
    name: "balanceOf",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "uint256", name: "_amount", type: "uint256" }],
    name: "burn",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "account", type: "address" },
      { internalType: "uint256", name: "amount", type: "uint256" },
    ],
    name: "burnFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "decimals",
    outputs: [{ internalType: "uint8", name: "", type: "uint8" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "spender", type: "address" },
      { internalType: "uint256", name: "subtractedValue", type: "uint256" },
    ],
    name: "decreaseAllowance",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "account", type: "address" },
      { internalType: "uint256", name: "amount", type: "uint256" },
    ],
    name: "freezeToken",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "getOwner",
    outputs: [{ internalType: "address", name: "", type: "address" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "spender", type: "address" },
      { internalType: "uint256", name: "addedValue", type: "uint256" },
    ],
    name: "increaseAllowance",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "_to", type: "address" },
      { internalType: "uint256", name: "amount", type: "uint256" },
    ],
    name: "mint",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [{ internalType: "string", name: "", type: "string" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [{ internalType: "address", name: "", type: "address" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "", type: "address" }],
    name: "owners",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "_owner", type: "address" }],
    name: "setOwners",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [{ internalType: "string", name: "", type: "string" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "recipient", type: "address" },
      { internalType: "uint256", name: "amount", type: "uint256" },
    ],
    name: "transfer",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "sender", type: "address" },
      { internalType: "address", name: "recipient", type: "address" },
      { internalType: "uint256", name: "amount", type: "uint256" },
    ],
    name: "transferFrom",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "newOwner", type: "address" }],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "account", type: "address" }],
    name: "unfreezeToken",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    stateMutability: "nonpayable",
    type: "function",
  },
];
let web3;
let userAccount;

window.addEventListener("load", async function () {
  if (window.ethereum) {
    web3 = new Web3(window.ethereum);
    try {
      console.log("Web3 in without metamask: ", web3);
      await window.ethereum.enable();
      document
        .getElementById("connectWallet1")
        .addEventListener("click", connectWallet);

      // Automatically check user status after wallet is enabled and connected
      if (!userAccount) {
        const accounts = await web3.eth.getAccounts();
        if (accounts.length > 0) {
          userAccount = accounts[0];
          document.getElementById(
            "connectWallet1"
          ).textContent = `Connected: ${userAccount}`;
          await checkUserStatus(); // Check registration status when wallet is connected
        }
      }
    } catch (error) {
      console.error("User denied account access");
    }
  } else {
    alert("Metamask not detected");
  }
});

async function connectWallet() {
  try {
    const accounts = await web3.eth.requestAccounts();
    userAccount = accounts[0];
    document.getElementById(
      "connectWallet1"
    ).textContent = `Connected: ${userAccount}`;

    // After connecting the wallet, check if the user is registered
    await checkUserStatus();
  } catch (error) {
    console.error("Failed to connect wallet", error);
  }
}

async function generateRandomString(length = 6) {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let result = "";
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
}

async function registerUser() {
  console.log("User account is ");

  const contract = new web3.eth.Contract(contractABI, contractAddress);
  const stableInstance = new web3.eth.Contract(stableABI, stableAddress);
  let loaderOverlay;
  try {
    if (
      userAccount == null ||
      userAccount == "" ||
      userAccount == "0x0000000000000000000000000000000000000000"
    ) {
      alert("Please Connect Metamask First");
      return;
    }
    let _referrerID = 1; // Assume default value, can modify as needed
    let _coreferrerID = 1; // Same here
    let _amount = await contract.methods.REGESTRATION_FESS().call();
    let identity = await generateRandomString();

    console.log(
      "Parameters for Registration:",
      _referrerID,
      _coreferrerID,
      _amount,
      identity,
      userAccount
    );
    // Show the loader overlay and update the message
    loaderOverlay = document.getElementsByClassName("loader-overlay")[0]; // Removed the space
    const loaderText = document.getElementsByClassName("loader-text")[0]; // Use this to display messages

    loaderOverlay.style.display = "flex"; // Show loader overlay
    loaderText.innerText = "Approving transaction..."; // Set text

    await stableInstance.methods
      .approve(contractAddress, _amount)
      .send({ from: userAccount });
    // Update loader text for the registration process
    loaderText.innerText = "Processing registration...";

    await contract.methods
      .Registration(_referrerID, _coreferrerID, _amount, identity)
      .send({ from: userAccount, value: 0 });
    alert("Registration successful!");
    loaderOverlay.style.display = "none";
    // Update the button to show the course access after registration
    showOpenCourseButton();
  } catch (error) {
    console.error("Registration failed", error);
    loaderOverlay.style.display = "none";
  }
}

async function checkUserStatus() {
  if (!userAccount) {
    document.getElementById("connectWallet1").textContent = "Connect Wallet";
    return; // Do not alert user, only indicate wallet needs to be connected
  }

  try {
    const contract = new web3.eth.Contract(contractABI, contractAddress);
    console.log("User Account: ", userAccount);
    const isRegistered = await contract.methods.users(userAccount).call();

    if (isRegistered.isExist) {
      showOpenCourseButton();
    } else {
      showBuyCourseButton();
    }
  } catch (error) {
    console.error("Error checking registration status", error);
    alert("Failed to check registration status. Please try again.");
  }
}

function showBuyCourseButton() {
  const buttonContainer = document.getElementById("courseButtonContainerHindi");
  buttonContainer.innerHTML = `
    <a id="buyCourseButton" class="btn btn-white display-4">Buy Course</a>
  `;

  // Add click listener to the Buy Course button to trigger the registration process

  //   const buttonContainer = document.getElementById("courseButtonContainerHindi");
  //   buttonContainer.innerHTML = `
  // <a id="buyCourseButton" class="btn btn-white display-4">Buy Course</a>
  // `;

  // Add click listener to the Buy Course button to trigger the registration process
  document
    .getElementById("buyCourseButton")
    .addEventListener("click", registerUser);
  // Add click listener to the Buy Course button to trigger the registration process
}
document
  .getElementById("courseButtonContainerHindi")
  .addEventListener("click", async function () {
    // alert("But Course Click");
    // Check if the wallet is connected before proceeding with registration
    if (!userAccount) {
      alert("Please connect wallet first");
      return;
    }
    await registerUser();
  });

function showOpenCourseButton() {
  const buttonContainer = document.getElementById("courseButtonContainerHindi");
  buttonContainer.innerHTML = `
<a id="openCourseButton" class="btn btn-white display-4">Open Course</a>
`;

  // Add click listener to redirect to the course page
  document
    .getElementById("openCourseButton")
    .addEventListener("click", function () {
      window.location.href = "courseHindi.html"; // Change to the actual course page URL
    });
}
