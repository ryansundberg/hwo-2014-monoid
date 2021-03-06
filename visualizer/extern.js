
/** @constructor */
function RaceMessage(){};

/** @type {TrackMessage} */
RaceMessage.prototype.track;
/** @type !Array.<CarMessage> */
RaceMessage.prototype.cars;
/** @type {{laps: number, maxLapTimeMs: number, quickRace: boolean}} */
RaceMessage.prototype.raceSession;

/** @constructor */
function CarMessage(){};
/** @type {CarIdMessage} */
CarMessage.prototype.id;
/** @type {{length: number, width: number, guideFlagPosition: number}} */
CarMessage.prototype.dimensions;

/** @constructor */
function CarIdMessage(){};
/** @type {string} */
CarIdMessage.prototype.name;
/** @type {string} */
CarIdMessage.prototype.color;

/** @constructor */
function TrackMessage(){};
/** @type {string} */
TrackMessage.prototype.id;
/** @type {string} */
TrackMessage.prototype.name;
/** @type {Array.<PieceMessage>} */
TrackMessage.prototype.pieces;
/** @type {Array.<{distanceFromCenter: number, index: number}>} */
TrackMessage.prototype.lanes;
/** @type {PiecePosition} */
TrackMessage.prototype.startingPoint;

/** @constructor */
function PieceMessage(){}
/** @type {number} */
PieceMessage.prototype.length;
/** @type {boolean} */
PieceMessage.prototype.switch;
/** @type {number} */
PieceMessage.prototype.radius;
/** @type {number} */
PieceMessage.prototype.angle;

/** @constructor */
function GenericMessage(){};
/** @type {?} */
GenericMessage.prototype.data;
/** @type {string} msgType */
GenericMessage.prototype.msgType;
/** @type {number} */
GenericMessage.prototype.gameTick;

/** @constructor */
function PiecePosition(){};
/** @type {{x: number, y: number}} */
PiecePosition.prototype.position;
/** @type {number} */
PiecePosition.prototype.angle;

/** @constructor */
function CarPositionMessage(){};
/** @type {CarIdMessage} */
CarPositionMessage.prototype.id;
/** @type {number} */
CarPositionMessage.prototype.angle;
/** @type {{pieceIndex: number,
 *          inPieceDistance: number,
 *          lane: {startLaneIndex: number, endLaneIndex: number},
 *          lap: number}} */
CarPositionMessage.prototype.piecePosition;

/** @constructor */
function Dygraph(node, data, opts){};
Dygraph.prototype.destroy;
Dygraph.prototype.ready;
