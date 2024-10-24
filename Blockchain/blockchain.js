{
  /* <script type="text/javascript"> */
}
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

let web3;
let userAccount;
document.getElementsByClassName("loader")[0].style.display = "block";

async function toConnectWallet() {
  if (window.ethereum) {
    web3 = new Web3(window.ethereum);
    console.log("MetaMask detected.");
    try {
      await window.ethereum.enable();
      const accounts = await web3.eth.requestAccounts();
      userAccount = accounts[0]; // "0x0Bc914bCBacf285422008f149D3d99E15DaDEbFb"; //
      console.log("User account connected:", userAccount);
      await checkUserStatus();
    } catch (error) {
      console.error("User denied account access", error);

      redirectToIndex();
    }
  } else {
    document.getElementsByClassName("loader")[0].style.display = "none";
    redirectToIndex();
  }
}
toConnectWallet();

async function checkUserStatus() {
  if (!userAccount) {
    // alert("Please connect your wallet first.");
    redirectToIndex();
    return;
  }

  try {
    const contract = new web3.eth.Contract(contractABI, contractAddress);
    const isRegistered = await contract.methods.users(userAccount).call();
    console.log("Registration check result:", isRegistered);

    if (isRegistered.isExist) {
      console.log("User is registered.");
      // document.getElementById('content').style.display = 'block';
      document.getElementsByClassName("loader")[0].style.display = "none";
      document.getElementsByClassName("loader-overlay")[0].style.display =
        "none";
    } else {
      console.log("User is not registered.");
      // alert("You are not registered. Please register or buy the course.");
      document.getElementsByClassName("loader")[0].style.display = "none";

      redirectToIndex();
    }
  } catch (error) {
    console.error("Error checking registration status:", error);
    // alert("Failed to check registration status. Please try again.");
    document.getElementsByClassName("loader")[0].style.display = "none";

    redirectToIndex();
  }
}

function redirectToIndex() {
  console.log("Redirecting to index.html...");
  window.location.href = "index.html";
}
// </script>
