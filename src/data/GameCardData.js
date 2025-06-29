const GameCardData = [
  {
    id: 1,
    name: 'Red Dead Redemption 2',
    category: 'Base Game',
    discount: '-20%',
    originalPrice: '₹3,944',
    discountedPrice: '₹3,155',
    image: 'https://cdn1.epicgames.com/epic/offer/RDR2PC1227_Epic%20Games_860x1148-860x1148-b4c2210ee0c3c3b843a8de399bfe7f5c.jpg?resize=1&w=360&h=480&quality=medium',
  },
  {
    id: 2,
    name: 'Black Myth: Wukong',
    category: 'Edition',
    discount: '-20%',
    originalPrice: '₹5,522',
    discountedPrice: '₹4,418',
    image: 'https://cdn1.epicgames.com/spt-assets/ca9ef1bcf2f54043baac351366aec677/black-myth-wukong-jjjfw.png?resize=1&w=360&h=480&quality=medium',
  },
  {
    id: 3,
    name: 'Grand Theft Auto V',
    category: 'Base Game',
    discount: '-15%',
    originalPrice: '₹2,067',
    discountedPrice: '₹1,757',
    image: 'https://cdn1.epicgames.com/offer/b0cd075465c44f87be3b505ac04a2e46/GTAV_CHARM_Epic_FirstParty_PortraitFOB_1200x1600_R02_1200x1600-a5528b33df876e64f5dee728830c80a3?resize=1&w=360&h=480&quality=medium',
  },
  {
    id: 4,
    name: 'God of War Ragnarök',
    category: 'Base Game',
    discount: '-40%',
    originalPrice: '₹5,144',
    discountedPrice: '₹3,086',
    image: 'https://cdn1.epicgames.com/spt-assets/edaff839f0734d16bc89d2ddb1dc9339/steel-magnolia-19vzm.jpg?resize=1&w=360&h=480&quality=medium',
  },
  {
    id: 5,
    name: 'Hogwarts Legacy',
    category: 'Base Game',
    discount: '-50%',
    originalPrice: '₹4,373',
    discountedPrice: '₹3,155',
    image: 'https://cdn1.epicgames.com/offer/e97659b501af4e3981d5430dad170911/EGS_HogwartsLegacy_AvalancheSoftware_S2_1200x1600-bb9f789b6628ff2aa935f06f5e0f218a?resize=1&w=360&h=480&quality=medium',
  },
  {
    id: 6,
    name: 'EA SPORTS FC™ 25',
    category: 'Edition',
    discount: '-30%',
    originalPrice: '₹3,432',
    discountedPrice: '₹2,402',
    image: 'https://cdn1.epicgames.com/offer/b61e8ddd14e94619b7a74cf9d73f86b5/EGS_EASPORTSFC25StandardEdition_EACanada_S2_1200x1600-6e6b5c1d5d30e15b1dbdde721c6bc544?resize=1&w=360&h=480&quality=medium',
  },
  {
    id: 7,
    name: 'Ghost of Tsushima',
    category: 'Base Game',
    discount: '-25%',
    originalPrice: '₹2,574',
    discountedPrice: '₹1,931',
    image: 'https://cdn1.epicgames.com/offer/6e6aa039c73347b885803de65ac5d3db/EGS_GhostofTsushima_SuckerPunchProductions_S2_1200x1600-e23e02c1d70be7b528dba50860f87d39?resize=1&w=360&h=480&quality=medium',
  },
  {
    id: 8,
    name: 'UNCHARTED™: Legacy of Thieves Collection',
    category: 'Base Game',
    discount: '-50%',
    originalPrice: '₹1,715',
    discountedPrice: '₹858',
    image: 'https://cdn1.epicgames.com/offer/8b2d6cf2b45b41f1abe91bc5b7c1e8f9/EGS_UNCHARTEDLegacyofThievesCollection_NaughtyDogLLC_S2_1200x1600-9deaa177d8716bde5478cdd75d850c9c?resize=1&w=360&h=480&quality=medium',
  },
  {
    id: 9,
    name: 'Liars Bar',
    category: 'Base Game',
    discount: '-10%',
    originalPrice: '₹4,287',
    discountedPrice: '₹3,858',
    image: 'https://images.igdb.com/igdb/image/upload/t_cover_big/co8w00.webp',
  },
  {
    id: 10,
    name: 'Outlast',
    category: 'Base Game',
    discount: '-35%',
    originalPrice: '₹2,574',
    discountedPrice: '₹1,673',
    image: 'https://cdn1.epicgames.com/offer/78f42129096d4233bccc527733debfbd/EGS_Outlast_RedBarrels_S2_1200x1600-b02ebdfb4bcd3b1d608ab5b87257b3c4?resize=1&w=360&h=480&quality=medium',
  },
  {
    id: 11,
    name: 'Outlast 2',
    category: 'Base Game',
    discount: '-15%',
    originalPrice: '₹2,574',
    discountedPrice: '₹2,188',
    image: 'https://cdn1.epicgames.com/offer/e3e1dbeede5a471c9932edb2f7b99f51/EGS_Outlast2_RedBarrels_S2_1200x1600-b84f788e04780de2edf02ac003246e4b?resize=1&w=360&h=480&quality=medium',
  },
  {
    id: 12,
    name: 'Chained Together',
    category: 'Base Game',
    discount: '-40%',
    originalPrice: '₹1,287',
    discountedPrice: '₹772',
    image: 'https://images.igdb.com/igdb/image/upload/t_cover_big/co8cvi.webp',
  },
  {
    id: 13,
    name: 'Raft',
    category: 'Base Game',
    discount: '-30%',
    originalPrice: '₹3,432',
    discountedPrice: '₹2,402',
    image: 'https://images.igdb.com/igdb/image/upload/t_cover_big/co1xdc.webp',
  },
  {
    id: 14,
    name: 'Assetto Corsa (Bundle)',
    category: 'Bundle',
    discount: '-60%',
    originalPrice: '₹6,864',
    discountedPrice: '₹2,745',
    image: 'https://images.igdb.com/igdb/image/upload/t_cover_big/co3wib.webp',
  },
  {
    id: 15,
    name: 'The Forest',
    category: 'VR Experience',
    discount: '-20%',
    originalPrice: '₹2,144',
    discountedPrice: '₹1,715',
    image: 'https://images.igdb.com/igdb/image/upload/t_cover_big/co20x5.webp',
  },
  {
    id: 16,
    name: 'Borderlands 3',
    category: 'VR Experience',
    discount: '-20%',
    originalPrice: '₹2,144',
    discountedPrice: '₹1,715',
    image: 'https://cdn1.epicgames.com/offer/catnip/EGS_Borderlands3_Takeover_Mobile-560x760-58be14c3e086e3a85bedcc21c08ab5cb-560x760-58be14c3e086e3a85bedcc21c08ab5cbjpg_560x760-58be14c3e086e3a85bedcc21c08ab5cb?resize=1&w=360&h=480&quality=medium',
  },
  {
    id: 17,
    name: 'Resident Evil 4',
    category: 'VR Experience',
    discount: '-20%',
    originalPrice: '₹2,144',
    discountedPrice: '₹1,715',
    image: 'https://images.igdb.com/igdb/image/upload/t_cover_big/co6bo0.webp',
  },
  {
    id: 18,
    name: 'Dead Frontier 2',
    category: 'VR Experience',
    discount: '-20%',
    originalPrice: '₹2,144',
    discountedPrice: '₹1,715',
    image: 'https://images.igdb.com/igdb/image/upload/t_cover_big/co2o5x.webp',
  },
  {
    id: 19,
    name: 'Life is Strange',
    category: 'VR Experience',
    discount: '-20%',
    originalPrice: '₹2,144',
    discountedPrice: '₹1,715',
    image: 'https://external-game-cover-image-cf.store.on.epicgames.com/7599?resize=1&w=360&h=480&quality=medium',
  },
  {
    id: 15,
    name: 'LIFE IS STRANGE 2',
    category: 'VR EXPERIENCE',
    discount: '-20%',
    originalPrice: '$24.99',
    discountedPrice: '$19.99',
    image: 'https://external-game-cover-image-cf.store.on.epicgames.com/62151?resize=1&w=360&h=480&quality=medium',
  },
  {
    id: 15,
    name: 'PACIFY',
    category: 'VR EXPERIENCE',
    discount: '-20%',
    originalPrice: '$24.99',
    discountedPrice: '$19.99',
    image: 'https://external-game-cover-image-cf.store.on.epicgames.com/114455?resize=1&w=360&h=480&quality=medium',
  },
   {
    id: 15,
    name: 'CRYSIS',
    category: 'VR EXPERIENCE',
    discount: '-20%',
    originalPrice: '$24.99',
    discountedPrice: '$19.99',
    image: 'https://images.igdb.com/igdb/image/upload/t_cover_big/co2on1.webp',
  },
  {
    id: 15,
    name: 'CRYSIS 2',
    category: 'VR EXPERIENCE',
    discount: '-20%',
    originalPrice: '$24.99',
    discountedPrice: '$19.99',
    image: 'https://images.igdb.com/igdb/image/upload/t_cover_big/co2on2.webp',
  },
  {
    id: 15,
    name: 'CRYSIS 3',
    category: 'VR EXPERIENCE',
    discount: '-20%',
    originalPrice: '$24.99',
    discountedPrice: '$19.99',
    image: 'https://images.igdb.com/igdb/image/upload/t_cover_big/co2on3.webp',
  },
   {
    id: 15,
    name: 'RESIDENT EVIL 7 BIOHAZARD',
    category: 'VR EXPERIENCE',
    discount: '-20%',
    originalPrice: '$24.99',
    discountedPrice: '$19.99',
    image: 'https://images.igdb.com/igdb/image/upload/t_cover_big/co8uu1.webp',
  },
   {
    id: 15,
    name: 'WORLD WAR Z',
    category: 'VR EXPERIENCE',
    discount: '-20%',
    originalPrice: '$24.99',
    discountedPrice: '$19.99',
    image: 'https://images.igdb.com/igdb/image/upload/t_cover_big/co2i4r.webp',
  },
  {
    id: 15,
    name: 'TEKKEN 7',
    category: 'VR EXPERIENCE',
    discount: '-20%',
    originalPrice: '$24.99',
    discountedPrice: '$19.99',
    image: 'https://images.igdb.com/igdb/image/upload/t_cover_big/co1w4f.webp',
  },
];

export default GameCardData;
