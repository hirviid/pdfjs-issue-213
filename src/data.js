module.exports = [
  {
    id: "ck8wthb0v0000uz36di0wkxtr",
    dayPlanningId: "ck8wthb0v0001uz36ie4nck6d",
    name: "Team 1",
    startHour: "2020-04-11T07:00:00.000Z",
    multiplier: 1,
    vehicleId: "ck8wrhizl0008jm365uosaw0i",
    type: "DELIVERY",
    createdAt: "2020-04-12T08:59:34.543Z",
    updatedAt: "2020-04-12T08:59:34.544Z",
    members: [
      {
        id: "ck8wrhiyn0004jm36vb50wuvr",
        firstName: "Alice",
        lastName: "Marshall",
        email: "alice@moolah.be",
        password:
          "$2b$10$fXeEIPrsVHTnl41c5Yh7tuip/RU4Kd2EYEueLyEiYOklJVQhQIUZK",
        pinCode: "1111",
        photo:
          "https://robohash.org/abeumconsequuntur.jpg?size=200x200&set=set1",
        role: "EMPLOYEE",
        createdAt: "2020-04-12T08:03:45.599Z",
        updatedAt: "2020-04-12T08:03:45.599Z",
      },
    ],
    vehicle: {
      id: "ck8wrhizl0008jm365uosaw0i",
      name: "mercedes sprinter 1",
      units: 15,
    },
    reservations: [
      {
        id: "ck8wtrdqy0002i436hd8hdb2f",
        zipCode: "2650",
        city: "EDEGEM",
        type: "DELIVERY",
        timespan: "08:00 - 12:00",
        groupId: "ck8wtng9m0000i4360sxdww3y",
        teamId: "ck8wthb0v0000uz36di0wkxtr",
        duration: 40,
        notes: null,
        index: 0,
        createdAt: "2020-04-12T09:07:24.634Z",
        updatedAt: "2020-06-05T07:59:10.452Z",
        products: [
          {
            id: "ck9yb7f4s0038inrr6otwfjeq",
            externalID: "110",
            description: "Mini park minions",
            location: null,
            pickList: null,
            image: null,
            pickupDuration: 20,
            deliveryDuration: 20,
            reservationId: "ck8wtrdqy0002i436hd8hdb2f",
            units: 1,
            reservationProductId: null,
          },
          {
            id: "ck9yb7f4s0039inrrg0e2ul0o",
            externalID: "115",
            description: "Mini park dino",
            location: null,
            pickList: null,
            image: null,
            pickupDuration: 20,
            deliveryDuration: 20,
            reservationId: "ck8wtrdqy0002i436hd8hdb2f",
            units: 1,
            reservationProductId: null,
          },
        ],
        group: {
          id: "ck8wtng9m0000i4360sxdww3y",
          reservationGroupId: "ck8wtng9m0001i436fy6d9obh",
          dayPlanningId: "ck8wthb0v0001uz36ie4nck6d",
          createdAt: "2020-04-12T09:04:21.274Z",
          updatedAt: "2020-04-12T09:04:21.275Z",
        },
      },
    ],
  },
  {
    id: "ck93quc7j0003bs36ebsetywu",
    dayPlanningId: "ck8wthb0v0001uz36ie4nck6d",
    name: "Team 2",
    startHour: "2020-04-11T07:00:00.000Z",
    multiplier: 1,
    vehicleId: "ck8wrhj0a0011jm365rlooq7h",
    type: "DELIVERY",
    createdAt: "2020-04-17T05:20:06.991Z",
    updatedAt: "2020-04-17T05:20:06.992Z",
    members: [
      {
        id: "ck8wrhiyw0005jm3600nxj4bf",
        firstName: "Bob",
        lastName: "Baumann",
        email: "bob@moolah.be",
        password:
          "$2b$10$fXeEIPrsVHTnl41c5Yh7tuip/RU4Kd2EYEueLyEiYOklJVQhQIUZK",
        pinCode: "2222",
        photo:
          "https://robohash.org/sedevenietdoloremque.jpg?size=200x200&set=set1",
        role: "EMPLOYEE",
        createdAt: "2020-04-12T08:03:45.608Z",
        updatedAt: "2020-04-12T08:03:45.609Z",
      },
      {
        id: "ck8wrhizd0007jm36909927dz",
        firstName: "Ted",
        lastName: "Mcabee",
        email: "ted@moolah.be",
        password:
          "$2b$10$fXeEIPrsVHTnl41c5Yh7tuip/RU4Kd2EYEueLyEiYOklJVQhQIUZK",
        pinCode: "4444",
        photo: "https://robohash.org/sintomnisnisi.jpg?size=200x200&set=set1",
        role: "EMPLOYEE",
        createdAt: "2020-04-12T08:03:45.625Z",
        updatedAt: "2020-04-12T08:03:45.626Z",
      },
    ],
    vehicle: {
      id: "ck8wrhj0a0011jm365rlooq7h",
      name: "fiat ducato 2",
      units: 16,
    },
    reservations: [
      {
        id: "ckb1x2e0w00056yrrvayl4u4y",
        zipCode: "2540",
        city: "HOVE",
        type: "DELIVERY",
        timespan: "08:00 - 12:00",
        groupId: "ck8wtng9m0000i4360sxdww3y",
        teamId: "ck93quc7j0003bs36ebsetywu",
        duration: 60,
        notes: null,
        index: 3,
        createdAt: "2020-06-05T07:58:12.608Z",
        updatedAt: "2020-06-05T07:59:10.452Z",
        products: [
          {
            id: "ckb1x2e0w00066yrr8bzcyn51",
            externalID: "111",
            description: "Mini park frozen",
            location: "Gang 9",
            pickList: "",
            image: null,
            pickupDuration: 20,
            deliveryDuration: 20,
            reservationId: "ckb1x2e0w00056yrrvayl4u4y",
            units: 1,
            reservationProductId: null,
          },
          {
            id: "ckb1x2e0w00076yrrfmjgkbgu",
            externalID: "2129",
            description: "Graffiti run 15m",
            location: "",
            pickList: "",
            image: null,
            pickupDuration: 40,
            deliveryDuration: 40,
            reservationId: "ckb1x2e0w00056yrrvayl4u4y",
            units: 1,
            reservationProductId: null,
          },
        ],
        group: {
          id: "ck8wtng9m0000i4360sxdww3y",
          reservationGroupId: "ck8wtng9m0001i436fy6d9obh",
          dayPlanningId: "ck8wthb0v0001uz36ie4nck6d",
          createdAt: "2020-04-12T09:04:21.274Z",
          updatedAt: "2020-04-12T09:04:21.275Z",
        },
      },
      {
        id: "ckb1wzks4000761rrkkmp2xhi",
        zipCode: "2520",
        city: "RANST",
        type: "DELIVERY",
        timespan: "08:00 - 12:00",
        groupId: "ck8wtng9m0000i4360sxdww3y",
        teamId: "ck93quc7j0003bs36ebsetywu",
        duration: 20,
        notes: null,
        index: 1,
        createdAt: "2020-06-05T07:56:01.396Z",
        updatedAt: "2020-06-05T07:59:10.452Z",
        products: [
          {
            id: "ckb1wzks4000861rr47t8vfjn",
            externalID: "111",
            description: "Mini park frozen",
            location: "Gang 9",
            pickList: "",
            image: null,
            pickupDuration: 20,
            deliveryDuration: 20,
            reservationId: "ckb1wzks4000761rrkkmp2xhi",
            units: 1,
            reservationProductId: null,
          },
        ],
        group: {
          id: "ck8wtng9m0000i4360sxdww3y",
          reservationGroupId: "ck8wtng9m0001i436fy6d9obh",
          dayPlanningId: "ck8wthb0v0001uz36ie4nck6d",
          createdAt: "2020-04-12T09:04:21.274Z",
          updatedAt: "2020-04-12T09:04:21.275Z",
        },
      },
      {
        id: "ck9a9ftvy0014j2362ioay9xs",
        zipCode: "2630",
        city: "AARTSELAAR",
        type: "DELIVERY",
        timespan: "08:00 - 12:00",
        groupId: "ck8wtng9m0000i4360sxdww3y",
        teamId: "ck93quc7j0003bs36ebsetywu",
        duration: 20,
        notes: null,
        index: 2,
        createdAt: "2020-04-21T18:47:19.822Z",
        updatedAt: "2020-06-05T07:59:10.452Z",
        products: [
          {
            id: "ck9a9ftvy0015j236qgp1s2tn",
            externalID: "110",
            description: "Mini park minions",
            location: null,
            pickList: null,
            image: null,
            pickupDuration: 20,
            deliveryDuration: 20,
            reservationId: "ck9a9ftvy0014j2362ioay9xs",
            units: 1,
            reservationProductId: null,
          },
        ],
        group: {
          id: "ck8wtng9m0000i4360sxdww3y",
          reservationGroupId: "ck8wtng9m0001i436fy6d9obh",
          dayPlanningId: "ck8wthb0v0001uz36ie4nck6d",
          createdAt: "2020-04-12T09:04:21.274Z",
          updatedAt: "2020-04-12T09:04:21.275Z",
        },
      },
      {
        id: "ck8y7zkbn0005i436f2mp3q6t",
        zipCode: "2550",
        city: "KONTICH",
        type: "DELIVERY",
        timespan: "08:00 - 13:00",
        groupId: "ck8wtng9m0000i4360sxdww3y",
        teamId: "ck93quc7j0003bs36ebsetywu",
        duration: 60,
        notes: null,
        index: 5,
        createdAt: "2020-04-13T08:33:27.203Z",
        updatedAt: "2020-06-05T07:59:10.452Z",
        products: [
          {
            id: "ck9y9d1b40020inrrbkkd4k4a",
            externalID: "111",
            description: "Mini park frozen",
            location: null,
            pickList: null,
            image: null,
            pickupDuration: 20,
            deliveryDuration: 20,
            reservationId: "ck8y7zkbn0005i436f2mp3q6t",
            units: 1,
            reservationProductId: null,
          },
          {
            id: "ck9y9d1b40021inrr3jl04x35",
            externalID: "115",
            description: "Mini park dino",
            location: null,
            pickList: null,
            image: null,
            pickupDuration: 20,
            deliveryDuration: 20,
            reservationId: "ck8y7zkbn0005i436f2mp3q6t",
            units: 1,
            reservationProductId: null,
          },
          {
            id: "ck9y9d1b40022inrru7a04yuw",
            externalID: "119",
            description: "Mini combifun pokemon",
            location: null,
            pickList: null,
            image: null,
            pickupDuration: 20,
            deliveryDuration: 20,
            reservationId: "ck8y7zkbn0005i436f2mp3q6t",
            units: 1,
            reservationProductId: null,
          },
        ],
        group: {
          id: "ck8wtng9m0000i4360sxdww3y",
          reservationGroupId: "ck8wtng9m0001i436fy6d9obh",
          dayPlanningId: "ck8wthb0v0001uz36ie4nck6d",
          createdAt: "2020-04-12T09:04:21.274Z",
          updatedAt: "2020-04-12T09:04:21.275Z",
        },
      },
      {
        id: "ck9a8ewfx0008j236j5pq14vz",
        zipCode: "2540",
        city: "HOVE",
        type: "DELIVERY",
        timespan: "08:00 - 12:00",
        groupId: "ck8wtng9m0000i4360sxdww3y",
        teamId: "ck93quc7j0003bs36ebsetywu",
        duration: 245,
        notes: "opmerking",
        index: 4,
        createdAt: "2020-04-21T18:18:36.861Z",
        updatedAt: "2020-06-05T07:59:10.452Z",
        products: [
          {
            id: "ck9yasjyz0024inrrrgkb1te3",
            externalID: "110",
            description: "Mini park minions",
            location: null,
            pickList: null,
            image: null,
            pickupDuration: 20,
            deliveryDuration: 20,
            reservationId: "ck9a8ewfx0008j236j5pq14vz",
            units: 1,
            reservationProductId: null,
          },
          {
            id: "ck9yasjyz0025inrrmq2oyt44",
            externalID: "260",
            description: "Basejump XXL slide jungle",
            location: null,
            pickList: null,
            image: null,
            pickupDuration: 60,
            deliveryDuration: 60,
            reservationId: "ck9a8ewfx0008j236j5pq14vz",
            units: 3,
            reservationProductId: null,
          },
          {
            id: "ck9yasjyz0026inrrhghdfqnm",
            externalID: "250",
            description: "Voetbal boarding",
            location: null,
            pickList: null,
            image: null,
            pickupDuration: 30,
            deliveryDuration: 30,
            reservationId: "ck9a8ewfx0008j236j5pq14vz",
            units: 2,
            reservationProductId: null,
          },
          {
            id: "ck9yasjyz0027inrrqn2zks5e",
            externalID: "240",
            description: "Ananas klimkooi",
            location: null,
            pickList: null,
            image: null,
            pickupDuration: 30,
            deliveryDuration: 30,
            reservationId: "ck9a8ewfx0008j236j5pq14vz",
            units: 2,
            reservationProductId: null,
          },
          {
            id: "ck9yasjyz0028inrrqotzaxea",
            externalID: "227",
            description: "Combi sumo & gladiator",
            location: null,
            pickList: null,
            image: null,
            pickupDuration: 30,
            deliveryDuration: 30,
            reservationId: "ck9a8ewfx0008j236j5pq14vz",
            units: 2,
            reservationProductId: null,
          },
          {
            id: "ck9yasjyz0029inrr7rmfp4h4",
            externalID: "222",
            description: "Swing him off army",
            location: null,
            pickList: null,
            image: null,
            pickupDuration: 30,
            deliveryDuration: 30,
            reservationId: "ck9a8ewfx0008j236j5pq14vz",
            units: 2,
            reservationProductId: null,
          },
          {
            id: "ck9yasjyz0030inrrq5n6q96d",
            externalID: "212",
            description: "Kids playzone seaworld",
            location: null,
            pickList: null,
            image: null,
            pickupDuration: 15,
            deliveryDuration: 15,
            reservationId: "ck9a8ewfx0008j236j5pq14vz",
            units: 1,
            reservationProductId: null,
          },
          {
            id: "ck9yasjyz0031inrrx8ilrxz6",
            externalID: "238",
            description: "Army klimkooi",
            location: null,
            pickList: null,
            image: null,
            pickupDuration: 30,
            deliveryDuration: 30,
            reservationId: "ck9a8ewfx0008j236j5pq14vz",
            units: 2,
            reservationProductId: null,
          },
        ],
        group: {
          id: "ck8wtng9m0000i4360sxdww3y",
          reservationGroupId: "ck8wtng9m0001i436fy6d9obh",
          dayPlanningId: "ck8wthb0v0001uz36ie4nck6d",
          createdAt: "2020-04-12T09:04:21.274Z",
          updatedAt: "2020-04-12T09:04:21.275Z",
        },
      },
    ],
  },
  {
    id: "ck9kuvafy0000vq36l8t732o9",
    dayPlanningId: "ck8wthb0v0001uz36ie4nck6d",
    name: "Team 1c",
    startHour: "2020-04-11T08:00:00.000Z",
    multiplier: 3,
    vehicleId: "ck8wrhj020010jm36m8joh3ot",
    type: "DELIVERY",
    createdAt: "2020-04-29T04:44:54.814Z",
    updatedAt: "2020-04-29T05:24:04.615Z",
    members: [
      {
        id: "ck8wrhizd0007jm36909927dz",
        firstName: "Ted",
        lastName: "Mcabee",
        email: "ted@moolah.be",
        password:
          "$2b$10$fXeEIPrsVHTnl41c5Yh7tuip/RU4Kd2EYEueLyEiYOklJVQhQIUZK",
        pinCode: "4444",
        photo: "https://robohash.org/sintomnisnisi.jpg?size=200x200&set=set1",
        role: "EMPLOYEE",
        createdAt: "2020-04-12T08:03:45.625Z",
        updatedAt: "2020-04-12T08:03:45.626Z",
      },
    ],
    vehicle: {
      id: "ck8wrhj020010jm36m8joh3ot",
      name: "fiat ducato 1",
      units: 16,
    },
    reservations: [
      {
        id: "ckb1wyp63000061rrjfkq4n88",
        zipCode: "1000",
        city: "BRUSSEL",
        type: "DELIVERY",
        timespan: "08:00 - 12:00",
        groupId: "ckb1wk05t00062arryaen5ic7",
        teamId: "ck9kuvafy0000vq36l8t732o9",
        duration: 70,
        notes: null,
        index: 0,
        createdAt: "2020-06-05T07:55:20.427Z",
        updatedAt: "2020-06-05T07:56:05.666Z",
        products: [
          {
            id: "ckb1wyp63000161rr1ny97h6n",
            externalID: "112",
            description: "Mini park duivel",
            location: "Gang 9",
            pickList: "",
            image: null,
            pickupDuration: 20,
            deliveryDuration: 20,
            reservationId: "ckb1wyp63000061rrjfkq4n88",
            units: 1,
            reservationProductId: null,
          },
          {
            id: "ckb1wyp63000261rr06pdfzgj",
            externalID: "120",
            description: "Mini combifun Star Wars",
            location: "Gang 9",
            pickList: "",
            image: null,
            pickupDuration: 20,
            deliveryDuration: 20,
            reservationId: "ckb1wyp63000061rrjfkq4n88",
            units: 1,
            reservationProductId: null,
          },
          {
            id: "ckb1wyp63000361rr9vnl1nng",
            externalID: "235",
            description: "Bungee run army",
            location: "Gang 5",
            pickList: "Platen, rekkers, velcro units",
            image: null,
            pickupDuration: 30,
            deliveryDuration: 30,
            reservationId: "ckb1wyp63000061rrjfkq4n88",
            units: 1,
            reservationProductId: null,
          },
        ],
        group: {
          id: "ckb1wk05t00062arryaen5ic7",
          reservationGroupId: "ckakm12ub00022z361w2v4c3q",
          dayPlanningId: "ck8wthb0v0001uz36ie4nck6d",
          createdAt: "2020-06-05T07:43:54.833Z",
          updatedAt: "2020-06-05T07:43:54.833Z",
        },
      },
      {
        id: "ckb1wz8m8000561rr5mtclg9v",
        zipCode: "1000",
        city: "BRUSSEL",
        type: "DELIVERY",
        timespan: "08:00 - 12:00",
        groupId: "ckb1wk05t00062arryaen5ic7",
        teamId: "ck9kuvafy0000vq36l8t732o9",
        duration: 20,
        notes: null,
        index: 1,
        createdAt: "2020-06-05T07:55:45.632Z",
        updatedAt: "2020-06-05T07:56:05.667Z",
        products: [
          {
            id: "ckb1wz8m8000661rrnf0k9gf2",
            externalID: "114",
            description: "Mini park krokodil",
            location: "Gang 9",
            pickList: "",
            image: null,
            pickupDuration: 20,
            deliveryDuration: 20,
            reservationId: "ckb1wz8m8000561rr5mtclg9v",
            units: 1,
            reservationProductId: null,
          },
        ],
        group: {
          id: "ckb1wk05t00062arryaen5ic7",
          reservationGroupId: "ckakm12ub00022z361w2v4c3q",
          dayPlanningId: "ck8wthb0v0001uz36ie4nck6d",
          createdAt: "2020-06-05T07:43:54.833Z",
          updatedAt: "2020-06-05T07:43:54.833Z",
        },
      },
      {
        id: "ckb1wja9000002arrnw3f7pl9",
        zipCode: "1000",
        city: "BRUSSEL",
        type: "DELIVERY",
        timespan: "08:00 - 12:00",
        groupId: "ck8wtng9m0000i4360sxdww3y",
        teamId: "ck9kuvafy0000vq36l8t732o9",
        duration: 60,
        notes: null,
        index: 2,
        createdAt: "2020-06-05T07:43:21.251Z",
        updatedAt: "2020-06-05T07:56:05.667Z",
        products: [
          {
            id: "ckb1wja9100012arrlynvozmb",
            externalID: "112",
            description: "Mini park duivel",
            location: "Gang 9",
            pickList: "",
            image: null,
            pickupDuration: 20,
            deliveryDuration: 20,
            reservationId: "ckb1wja9000002arrnw3f7pl9",
            units: 1,
            reservationProductId: null,
          },
          {
            id: "ckb1wja9100022arrms6mgwml",
            externalID: "116",
            description: "Combislide minions",
            location: "Gang 9",
            pickList: "",
            image: null,
            pickupDuration: 20,
            deliveryDuration: 20,
            reservationId: "ckb1wja9000002arrnw3f7pl9",
            units: 1,
            reservationProductId: null,
          },
          {
            id: "ckb1wja9100032arrpczyl4e6",
            externalID: "124",
            description: "Het Eenhoorn Park",
            location: "Gang 1",
            pickList: "",
            image: null,
            pickupDuration: 20,
            deliveryDuration: 20,
            reservationId: "ckb1wja9000002arrnw3f7pl9",
            units: 1,
            reservationProductId: null,
          },
        ],
        group: {
          id: "ck8wtng9m0000i4360sxdww3y",
          reservationGroupId: "ck8wtng9m0001i436fy6d9obh",
          dayPlanningId: "ck8wthb0v0001uz36ie4nck6d",
          createdAt: "2020-04-12T09:04:21.274Z",
          updatedAt: "2020-04-12T09:04:21.275Z",
        },
      },
    ],
  },
  {
    id: "ck9eh2ld00000zk36yobx71st",
    dayPlanningId: "ck8wthb0v0001uz36ie4nck6d",
    name: "Team 3",
    startHour: "2020-04-11T08:00:00.000Z",
    multiplier: 2,
    vehicleId: "ck8wrhj020010jm36m8joh3ot",
    type: "DELIVERY",
    createdAt: "2020-04-24T17:32:03.875Z",
    updatedAt: "2020-05-08T13:52:25.541Z",
    members: [
      {
        id: "ck8wrhiyn0004jm36vb50wuvr",
        firstName: "Alice",
        lastName: "Marshall",
        email: "alice@moolah.be",
        password:
          "$2b$10$fXeEIPrsVHTnl41c5Yh7tuip/RU4Kd2EYEueLyEiYOklJVQhQIUZK",
        pinCode: "1111",
        photo:
          "https://robohash.org/abeumconsequuntur.jpg?size=200x200&set=set1",
        role: "EMPLOYEE",
        createdAt: "2020-04-12T08:03:45.599Z",
        updatedAt: "2020-04-12T08:03:45.599Z",
      },
      {
        id: "ck8wrhiyw0005jm3600nxj4bf",
        firstName: "Bob",
        lastName: "Baumann",
        email: "bob@moolah.be",
        password:
          "$2b$10$fXeEIPrsVHTnl41c5Yh7tuip/RU4Kd2EYEueLyEiYOklJVQhQIUZK",
        pinCode: "2222",
        photo:
          "https://robohash.org/sedevenietdoloremque.jpg?size=200x200&set=set1",
        role: "EMPLOYEE",
        createdAt: "2020-04-12T08:03:45.608Z",
        updatedAt: "2020-04-12T08:03:45.609Z",
      },
    ],
    vehicle: {
      id: "ck8wrhj020010jm36m8joh3ot",
      name: "fiat ducato 1",
      units: 16,
    },
    reservations: [
      {
        id: "ckb1x25au00006yrrqv6q18xw",
        zipCode: "2550",
        city: "KONTICH",
        type: "DELIVERY",
        timespan: "08:00 - 12:00",
        groupId: "ck8wtng9m0000i4360sxdww3y",
        teamId: "ck9eh2ld00000zk36yobx71st",
        duration: 110,
        notes: null,
        index: 6,
        createdAt: "2020-06-05T07:58:01.302Z",
        updatedAt: "2020-06-05T07:59:10.453Z",
        products: [
          {
            id: "ckb1x25av00016yrraihd6l49",
            externalID: "133",
            description: "Het dino Park",
            location: "Gang 1",
            pickList: "",
            image: null,
            pickupDuration: 20,
            deliveryDuration: 20,
            reservationId: "ckb1x25au00006yrrqv6q18xw",
            units: 1,
            reservationProductId: null,
          },
          {
            id: "ckb1x25av00026yrrgibz7utr",
            externalID: "224",
            description: "Gladiator army",
            location: "Gang 5",
            pickList: "2 zwarte blokken, gladiator attributen",
            image: null,
            pickupDuration: 30,
            deliveryDuration: 30,
            reservationId: "ckb1x25au00006yrrqv6q18xw",
            units: 1,
            reservationProductId: null,
          },
          {
            id: "ckb1x25av00036yrrt6fs28md",
            externalID: "2139",
            description: "Dino run 14,5m",
            location: "",
            pickList: "",
            image: null,
            pickupDuration: 40,
            deliveryDuration: 40,
            reservationId: "ckb1x25au00006yrrqv6q18xw",
            units: 1,
            reservationProductId: null,
          },
          {
            id: "ckb1x25av00046yrrx9om46sv",
            externalID: "2229",
            description: "Jungle 6 glijbaan",
            location: "",
            pickList: "",
            image: null,
            pickupDuration: 20,
            deliveryDuration: 20,
            reservationId: "ckb1x25au00006yrrqv6q18xw",
            units: 1,
            reservationProductId: null,
          },
        ],
        group: {
          id: "ck8wtng9m0000i4360sxdww3y",
          reservationGroupId: "ck8wtng9m0001i436fy6d9obh",
          dayPlanningId: "ck8wthb0v0001uz36ie4nck6d",
          createdAt: "2020-04-12T09:04:21.274Z",
          updatedAt: "2020-04-12T09:04:21.275Z",
        },
      },
    ],
  },
];
