# Shared

Types:

- <code><a href="./src/resources/shared.ts">AirTransportMissionFull</a></code>
- <code><a href="./src/resources/shared.ts">AircraftstatusFull</a></code>
- <code><a href="./src/resources/shared.ts">AIsFull</a></code>
- <code><a href="./src/resources/shared.ts">AttitudeDataFull</a></code>
- <code><a href="./src/resources/shared.ts">AttitudesetFull</a></code>
- <code><a href="./src/resources/shared.ts">CollectRequestFull</a></code>
- <code><a href="./src/resources/shared.ts">CollectResponseFull</a></code>
- <code><a href="./src/resources/shared.ts">ElsetFull</a></code>
- <code><a href="./src/resources/shared.ts">EopFull</a></code>
- <code><a href="./src/resources/shared.ts">EphemerisFull</a></code>
- <code><a href="./src/resources/shared.ts">EphemerisSetFull</a></code>
- <code><a href="./src/resources/shared.ts">EvacFull</a></code>
- <code><a href="./src/resources/shared.ts">EventEvolutionFull</a></code>
- <code><a href="./src/resources/shared.ts">FlightPlanFull</a></code>

# Conjunctions

Types:

- <code><a href="./src/resources/conjunctions/conjunctions.ts">ConjunctionAbridged</a></code>
- <code><a href="./src/resources/conjunctions/conjunctions.ts">ConjunctionFull</a></code>
- <code><a href="./src/resources/conjunctions/conjunctions.ts">ConjunctionTupleResponse</a></code>

Methods:

- <code title="post /filedrop/udl-conjunction">client.conjunctions.<a href="./src/resources/conjunctions/conjunctions.ts">create</a>([ ...body ]) -> void</code>
- <code title="get /udl/conjunction/{id}">client.conjunctions.<a href="./src/resources/conjunctions/conjunctions.ts">retrieve</a>({ ...params }) -> ConjunctionFull</code>
- <code title="get /udl/conjunction/queryhelp">client.conjunctions.<a href="./src/resources/conjunctions/conjunctions.ts">queryhelp</a>() -> void</code>
- <code title="get /udl/conjunction/tuple">client.conjunctions.<a href="./src/resources/conjunctions/conjunctions.ts">tuple</a>({ ...params }) -> ConjunctionTupleResponse</code>

## History

Types:

- <code><a href="./src/resources/conjunctions/history.ts">HistoryCountResponse</a></code>

Methods:

- <code title="get /udl/conjunction/history/aodr">client.conjunctions.history.<a href="./src/resources/conjunctions/history.ts">aodr</a>({ ...params }) -> void</code>
- <code title="get /udl/conjunction/history/count">client.conjunctions.history.<a href="./src/resources/conjunctions/history.ts">count</a>({ ...params }) -> string</code>

# AirOperations

## Crewpapers

Methods:

- <code title="post /filedrop/crewpapers">client.airOperations.crewpapers.<a href="./src/resources/air-operations/crewpapers.ts">create</a>({ ...params }) -> void</code>
- <code title="post /udl/crewpapers/unpublish">client.airOperations.crewpapers.<a href="./src/resources/air-operations/crewpapers.ts">unpublish</a>({ ...params }) -> void</code>

## AircraftSorties

Methods:

- <code title="post /filedrop/udl-aircraftsortie">client.airOperations.aircraftSorties.<a href="./src/resources/air-operations/aircraft-sorties.ts">create</a>([ ...body ]) -> void</code>

## AirEvents

Methods:

- <code title="post /filedrop/udl-airevent">client.airOperations.airEvents.<a href="./src/resources/air-operations/air-events.ts">create</a>([ ...body ]) -> void</code>

## AirspaceControlOrders

Methods:

- <code title="post /filedrop/udl-airspacecontrolorder">client.airOperations.airspaceControlOrders.<a href="./src/resources/air-operations/airspace-control-orders.ts">create</a>([ ...body ]) -> void</code>

## AirTaskingOrders

Methods:

- <code title="post /filedrop/udl-airtaskingorder">client.airOperations.airTaskingOrders.<a href="./src/resources/air-operations/air-tasking-orders.ts">create</a>([ ...body ]) -> void</code>

## AircraftSortie

Types:

- <code><a href="./src/resources/air-operations/aircraft-sortie.ts">AircraftsortieAbridged</a></code>
- <code><a href="./src/resources/air-operations/aircraft-sortie.ts">AircraftsortieFull</a></code>
- <code><a href="./src/resources/air-operations/aircraft-sortie.ts">AircraftSortieListResponse</a></code>
- <code><a href="./src/resources/air-operations/aircraft-sortie.ts">AircraftSortieCountResponse</a></code>
- <code><a href="./src/resources/air-operations/aircraft-sortie.ts">AircraftSortieHistoryCountResponse</a></code>
- <code><a href="./src/resources/air-operations/aircraft-sortie.ts">AircraftSortieHistoryQueryResponse</a></code>

Methods:

- <code title="post /udl/aircraftsortie">client.airOperations.aircraftSortie.<a href="./src/resources/air-operations/aircraft-sortie.ts">create</a>({ ...params }) -> void</code>
- <code title="get /udl/aircraftsortie">client.airOperations.aircraftSortie.<a href="./src/resources/air-operations/aircraft-sortie.ts">list</a>({ ...params }) -> AircraftSortieListResponse</code>
- <code title="get /udl/aircraftsortie/count">client.airOperations.aircraftSortie.<a href="./src/resources/air-operations/aircraft-sortie.ts">count</a>({ ...params }) -> string</code>
- <code title="post /udl/aircraftsortie/createBulk">client.airOperations.aircraftSortie.<a href="./src/resources/air-operations/aircraft-sortie.ts">createBulk</a>([ ...body ]) -> void</code>
- <code title="get /udl/aircraftsortie/history/aodr">client.airOperations.aircraftSortie.<a href="./src/resources/air-operations/aircraft-sortie.ts">historyAodr</a>({ ...params }) -> void</code>
- <code title="get /udl/aircraftsortie/history/count">client.airOperations.aircraftSortie.<a href="./src/resources/air-operations/aircraft-sortie.ts">historyCount</a>({ ...params }) -> string</code>
- <code title="get /udl/aircraftsortie/history">client.airOperations.aircraftSortie.<a href="./src/resources/air-operations/aircraft-sortie.ts">historyQuery</a>({ ...params }) -> AircraftSortieHistoryQueryResponse</code>

## DiplomaticClearances

## Flightplans

## LogisticsSupports

## DiplomaticClearance

Types:

- <code><a href="./src/resources/air-operations/diplomatic-clearance/diplomatic-clearance.ts">DiplomaticclearanceAbridged</a></code>
- <code><a href="./src/resources/air-operations/diplomatic-clearance/diplomatic-clearance.ts">DiplomaticclearanceFull</a></code>

### History

# Ephemerides

Methods:

- <code title="post /filedrop/ephem">client.ephemerides.<a href="./src/resources/ephemerides.ts">create</a>({ ...params }) -> void</code>

# Observations

## Monoradar

Methods:

- <code title="post /filedrop/monoradar">client.observations.monoradar.<a href="./src/resources/observations/monoradar.ts">create</a>([ ...body ]) -> void</code>

## Swir

Methods:

- <code title="post /filedrop/swir">client.observations.swir.<a href="./src/resources/observations/swir.ts">create</a>([ ...body ]) -> void</code>

## Ecpsdr

Types:

- <code><a href="./src/resources/observations/ecpsdr.ts">Ecpsdr</a></code>
- <code><a href="./src/resources/observations/ecpsdr.ts">EcpsdrAbridged</a></code>
- <code><a href="./src/resources/observations/ecpsdr.ts">EcpsdrListResponse</a></code>
- <code><a href="./src/resources/observations/ecpsdr.ts">EcpsdrCountResponse</a></code>
- <code><a href="./src/resources/observations/ecpsdr.ts">EcpsdrTupleResponse</a></code>

Methods:

- <code title="post /udl/ecpsdr">client.observations.ecpsdr.<a href="./src/resources/observations/ecpsdr.ts">create</a>({ ...params }) -> void</code>
- <code title="get /udl/ecpsdr/{id}">client.observations.ecpsdr.<a href="./src/resources/observations/ecpsdr.ts">retrieve</a>({ ...params }) -> Ecpsdr</code>
- <code title="get /udl/ecpsdr">client.observations.ecpsdr.<a href="./src/resources/observations/ecpsdr.ts">list</a>({ ...params }) -> EcpsdrListResponse</code>
- <code title="get /udl/ecpsdr/count">client.observations.ecpsdr.<a href="./src/resources/observations/ecpsdr.ts">count</a>({ ...params }) -> string</code>
- <code title="post /udl/ecpsdr/createBulk">client.observations.ecpsdr.<a href="./src/resources/observations/ecpsdr.ts">createBulk</a>([ ...body ]) -> void</code>
- <code title="get /udl/ecpsdr/queryhelp">client.observations.ecpsdr.<a href="./src/resources/observations/ecpsdr.ts">queryHelp</a>() -> void</code>
- <code title="get /udl/ecpsdr/tuple">client.observations.ecpsdr.<a href="./src/resources/observations/ecpsdr.ts">tuple</a>({ ...params }) -> EcpsdrTupleResponse</code>

## Eo

## Gnssobservations

# AIsObjects

Methods:

- <code title="post /filedrop/udl-ais">client.aisObjects.<a href="./src/resources/ais-objects.ts">create</a>([ ...body ]) -> void</code>

# AnalyticImagery

Types:

- <code><a href="./src/resources/analytic-imagery.ts">AnalyticImageryAbridged</a></code>
- <code><a href="./src/resources/analytic-imagery.ts">AnalyticImageryFull</a></code>
- <code><a href="./src/resources/analytic-imagery.ts">AnalyticImageryListResponse</a></code>
- <code><a href="./src/resources/analytic-imagery.ts">AnalyticImageryCountResponse</a></code>
- <code><a href="./src/resources/analytic-imagery.ts">AnalyticImageryHistoryResponse</a></code>
- <code><a href="./src/resources/analytic-imagery.ts">AnalyticImageryHistoryCountResponse</a></code>
- <code><a href="./src/resources/analytic-imagery.ts">AnalyticImageryTupleResponse</a></code>

Methods:

- <code title="post /filedrop/udl-analyticimagery">client.analyticImagery.<a href="./src/resources/analytic-imagery.ts">create</a>({ ...params }) -> void</code>
- <code title="get /udl/analyticimagery/{id}">client.analyticImagery.<a href="./src/resources/analytic-imagery.ts">retrieve</a>({ ...params }) -> AnalyticImageryFull</code>
- <code title="get /udl/analyticimagery">client.analyticImagery.<a href="./src/resources/analytic-imagery.ts">list</a>({ ...params }) -> AnalyticImageryListResponse</code>
- <code title="get /udl/analyticimagery/count">client.analyticImagery.<a href="./src/resources/analytic-imagery.ts">count</a>({ ...params }) -> string</code>
- <code title="get /udl/analyticimagery/history">client.analyticImagery.<a href="./src/resources/analytic-imagery.ts">history</a>({ ...params }) -> AnalyticImageryHistoryResponse</code>
- <code title="get /udl/analyticimagery/history/aodr">client.analyticImagery.<a href="./src/resources/analytic-imagery.ts">historyAodr</a>({ ...params }) -> void</code>
- <code title="get /udl/analyticimagery/history/count">client.analyticImagery.<a href="./src/resources/analytic-imagery.ts">historyCount</a>({ ...params }) -> string</code>
- <code title="get /udl/analyticimagery/queryhelp">client.analyticImagery.<a href="./src/resources/analytic-imagery.ts">queryhelp</a>() -> void</code>
- <code title="get /udl/analyticimagery/tuple">client.analyticImagery.<a href="./src/resources/analytic-imagery.ts">tuple</a>({ ...params }) -> AnalyticImageryTupleResponse</code>

# Attitudeset

Methods:

- <code title="post /filedrop/udl-attitudeset">client.attitudeset.<a href="./src/resources/attitudeset.ts">create</a>({ ...params }) -> void</code>

# CollectRequests

Types:

- <code><a href="./src/resources/collect-requests/collect-requests.ts">CollectRequestAbridged</a></code>
- <code><a href="./src/resources/collect-requests/collect-requests.ts">CollectRequestListResponse</a></code>
- <code><a href="./src/resources/collect-requests/collect-requests.ts">CollectRequestCountResponse</a></code>
- <code><a href="./src/resources/collect-requests/collect-requests.ts">CollectRequestTupleResponse</a></code>

Methods:

- <code title="post /udl/collectrequest">client.collectRequests.<a href="./src/resources/collect-requests/collect-requests.ts">create</a>({ ...params }) -> void</code>
- <code title="get /udl/collectrequest/{id}">client.collectRequests.<a href="./src/resources/collect-requests/collect-requests.ts">retrieve</a>({ ...params }) -> CollectRequestFull</code>
- <code title="get /udl/collectrequest">client.collectRequests.<a href="./src/resources/collect-requests/collect-requests.ts">list</a>({ ...params }) -> CollectRequestListResponse</code>
- <code title="get /udl/collectrequest/count">client.collectRequests.<a href="./src/resources/collect-requests/collect-requests.ts">count</a>({ ...params }) -> string</code>
- <code title="post /udl/collectrequest/createBulk">client.collectRequests.<a href="./src/resources/collect-requests/collect-requests.ts">createBulk</a>([ ...body ]) -> void</code>
- <code title="get /udl/collectrequest/queryhelp">client.collectRequests.<a href="./src/resources/collect-requests/collect-requests.ts">queryHelp</a>() -> void</code>
- <code title="get /udl/collectrequest/tuple">client.collectRequests.<a href="./src/resources/collect-requests/collect-requests.ts">tuple</a>({ ...params }) -> CollectRequestTupleResponse</code>

## History

Types:

- <code><a href="./src/resources/collect-requests/history.ts">HistoryListResponse</a></code>
- <code><a href="./src/resources/collect-requests/history.ts">HistoryCountResponse</a></code>

Methods:

- <code title="get /udl/collectrequest/history">client.collectRequests.history.<a href="./src/resources/collect-requests/history.ts">list</a>({ ...params }) -> HistoryListResponse</code>
- <code title="get /udl/collectrequest/history/aodr">client.collectRequests.history.<a href="./src/resources/collect-requests/history.ts">aodr</a>({ ...params }) -> void</code>
- <code title="get /udl/collectrequest/history/count">client.collectRequests.history.<a href="./src/resources/collect-requests/history.ts">count</a>({ ...params }) -> string</code>

# CollectResponses

Types:

- <code><a href="./src/resources/collect-responses/collect-responses.ts">CollectResponseAbridged</a></code>
- <code><a href="./src/resources/collect-responses/collect-responses.ts">CollectResponseListResponse</a></code>
- <code><a href="./src/resources/collect-responses/collect-responses.ts">CollectResponseCountResponse</a></code>

Methods:

- <code title="post /udl/collectresponse">client.collectResponses.<a href="./src/resources/collect-responses/collect-responses.ts">create</a>({ ...params }) -> void</code>
- <code title="get /udl/collectresponse/{id}">client.collectResponses.<a href="./src/resources/collect-responses/collect-responses.ts">retrieve</a>({ ...params }) -> CollectResponseFull</code>
- <code title="get /udl/collectresponse">client.collectResponses.<a href="./src/resources/collect-responses/collect-responses.ts">list</a>({ ...params }) -> CollectResponseListResponse</code>
- <code title="get /udl/collectresponse/count">client.collectResponses.<a href="./src/resources/collect-responses/collect-responses.ts">count</a>({ ...params }) -> string</code>
- <code title="post /udl/collectresponse/createBulk">client.collectResponses.<a href="./src/resources/collect-responses/collect-responses.ts">createBulk</a>([ ...body ]) -> void</code>
- <code title="get /udl/collectresponse/queryhelp">client.collectResponses.<a href="./src/resources/collect-responses/collect-responses.ts">queryHelp</a>() -> void</code>

## History

Types:

- <code><a href="./src/resources/collect-responses/history/history.ts">HistoryListResponse</a></code>
- <code><a href="./src/resources/collect-responses/history/history.ts">HistoryCountResponse</a></code>

Methods:

- <code title="get /udl/collectresponse/history">client.collectResponses.history.<a href="./src/resources/collect-responses/history/history.ts">list</a>({ ...params }) -> HistoryListResponse</code>
- <code title="get /udl/collectresponse/history/count">client.collectResponses.history.<a href="./src/resources/collect-responses/history/history.ts">count</a>({ ...params }) -> string</code>

### Aodr

Methods:

- <code title="get /udl/collectresponse/history/aodr">client.collectResponses.history.aodr.<a href="./src/resources/collect-responses/history/aodr.ts">list</a>({ ...params }) -> void</code>

## Tuple

Types:

- <code><a href="./src/resources/collect-responses/tuple.ts">TupleListResponse</a></code>

Methods:

- <code title="get /udl/collectresponse/tuple">client.collectResponses.tuple.<a href="./src/resources/collect-responses/tuple.ts">list</a>({ ...params }) -> TupleListResponse</code>

# Crew

Types:

- <code><a href="./src/resources/crew.ts">CrewAbridged</a></code>
- <code><a href="./src/resources/crew.ts">CrewFull</a></code>
- <code><a href="./src/resources/crew.ts">CrewListResponse</a></code>
- <code><a href="./src/resources/crew.ts">CrewCountResponse</a></code>
- <code><a href="./src/resources/crew.ts">CrewTupleResponse</a></code>

Methods:

- <code title="post /udl/crew">client.crew.<a href="./src/resources/crew.ts">create</a>({ ...params }) -> void</code>
- <code title="get /udl/crew/{id}">client.crew.<a href="./src/resources/crew.ts">retrieve</a>({ ...params }) -> CrewFull</code>
- <code title="put /udl/crew/{id}">client.crew.<a href="./src/resources/crew.ts">update</a>({ ...params }) -> void</code>
- <code title="get /udl/crew">client.crew.<a href="./src/resources/crew.ts">list</a>() -> CrewListResponse</code>
- <code title="get /udl/crew/count">client.crew.<a href="./src/resources/crew.ts">count</a>() -> string</code>
- <code title="get /udl/crew/queryhelp">client.crew.<a href="./src/resources/crew.ts">queryhelp</a>() -> void</code>
- <code title="get /udl/crew/tuple">client.crew.<a href="./src/resources/crew.ts">tuple</a>({ ...params }) -> CrewTupleResponse</code>

# Datalinks

Methods:

- <code title="post /filedrop/udl-datalink">client.datalinks.<a href="./src/resources/datalinks.ts">create</a>([ ...body ]) -> void</code>

# Diffofarrival

Types:

- <code><a href="./src/resources/diffofarrival/diffofarrival.ts">DiffofarrivalTupleResponse</a></code>

Methods:

- <code title="post /filedrop/udl-diffofarrival">client.diffofarrival.<a href="./src/resources/diffofarrival/diffofarrival.ts">create</a>([ ...body ]) -> void</code>
- <code title="get /udl/diffofarrival/{id}">client.diffofarrival.<a href="./src/resources/diffofarrival/diffofarrival.ts">retrieve</a>({ ...params }) -> DiffofarrivalFull</code>
- <code title="get /udl/diffofarrival/queryhelp">client.diffofarrival.<a href="./src/resources/diffofarrival/diffofarrival.ts">queryhelp</a>() -> void</code>
- <code title="get /udl/diffofarrival/tuple">client.diffofarrival.<a href="./src/resources/diffofarrival/diffofarrival.ts">tuple</a>({ ...params }) -> DiffofarrivalTupleResponse</code>

## History

Types:

- <code><a href="./src/resources/diffofarrival/history.ts">HistoryCountResponse</a></code>

Methods:

- <code title="get /udl/diffofarrival/history/count">client.diffofarrival.history.<a href="./src/resources/diffofarrival/history.ts">count</a>({ ...params }) -> string</code>

# DiplomaticClearances

Methods:

- <code title="post /filedrop/udl-diplomaticclearance">client.diplomaticClearances.<a href="./src/resources/diplomatic-clearances.ts">create</a>([ ...body ]) -> void</code>

# Ecpsdr

Methods:

- <code title="post /filedrop/udl-ecpsdr">client.ecpsdr.<a href="./src/resources/ecpsdr.ts">create</a>([ ...body ]) -> void</code>

# Filedrop

## Effectrequests

Methods:

- <code title="post /filedrop/udl-effectrequest">client.filedrop.effectrequests.<a href="./src/resources/filedrop/effectrequests.ts">create</a>([ ...body ]) -> void</code>

## Effectresponses

Methods:

- <code title="post /filedrop/udl-effectresponse">client.filedrop.effectresponses.<a href="./src/resources/filedrop/effectresponses.ts">create</a>([ ...body ]) -> void</code>

## Elsets

Methods:

- <code title="post /filedrop/udl-elset">client.filedrop.elsets.<a href="./src/resources/filedrop/elsets.ts">create</a>([ ...body ]) -> void</code>

## Eo

Methods:

- <code title="post /filedrop/udl-eo">client.filedrop.eo.<a href="./src/resources/filedrop/eo.ts">create</a>([ ...body ]) -> void</code>

## Ephemeris

Methods:

- <code title="post /filedrop/udl-ephset">client.filedrop.ephemeris.<a href="./src/resources/filedrop/ephemeris.ts">create</a>({ ...params }) -> void</code>

## Evac

Methods:

- <code title="post /filedrop/udl-evac">client.filedrop.evac.<a href="./src/resources/filedrop/evac.ts">create</a>([ ...body ]) -> void</code>

## Eventevolutions

Methods:

- <code title="post /filedrop/udl-eventevolution">client.filedrop.eventevolutions.<a href="./src/resources/filedrop/eventevolutions.ts">create</a>([ ...body ]) -> void</code>

## Flightplans

Methods:

- <code title="post /filedrop/udl-flightplan">client.filedrop.flightplans.<a href="./src/resources/filedrop/flightplans.ts">create</a>([ ...body ]) -> void</code>

## Gnssobservations

Methods:

- <code title="post /filedrop/udl-gnssobset">client.filedrop.gnssobservations.<a href="./src/resources/filedrop/gnssobservations.ts">create</a>([ ...body ]) -> void</code>

## Gnssrawif

Methods:

- <code title="post /filedrop/udl-gnssrawif">client.filedrop.gnssrawif.<a href="./src/resources/filedrop/gnssrawif.ts">create</a>({ ...params }) -> void</code>

## Mti

Methods:

- <code title="post /filedrop/udl-mti">client.filedrop.mti.<a href="./src/resources/filedrop/mti.ts">create</a>([ ...body ]) -> void</code>

## Observation

### Onboardnavigation

Methods:

- <code title="post /filedrop/udl-onboardnavigation">client.filedrop.observation.onboardnavigation.<a href="./src/resources/filedrop/observation/onboardnavigation.ts">create</a>([ ...body ]) -> void</code>

### PassiveRadar

Methods:

- <code title="post /filedrop/udl-passiveradar">client.filedrop.observation.passiveRadar.<a href="./src/resources/filedrop/observation/passive-radar.ts">create</a>([ ...body ]) -> void</code>

### Radar

Methods:

- <code title="post /filedrop/udl-radar">client.filedrop.observation.radar.<a href="./src/resources/filedrop/observation/radar.ts">create</a>([ ...body ]) -> void</code>

### Rf

Methods:

- <code title="post /filedrop/udl-rf">client.filedrop.observation.rf.<a href="./src/resources/filedrop/observation/rf.ts">create</a>([ ...body ]) -> void</code>

## OrbitDetermination

Methods:

- <code title="post /filedrop/udl-orbitdetermination">client.filedrop.orbitDetermination.<a href="./src/resources/filedrop/orbit-determination.ts">create</a>([ ...body ]) -> void</code>

## Track

### OrbitTrack

Methods:

- <code title="post /filedrop/udl-orbittrack">client.filedrop.track.orbitTrack.<a href="./src/resources/filedrop/track/orbit-track.ts">create</a>([ ...body ]) -> void</code>

## MissionOps

### PersonnelRecovery

Methods:

- <code title="post /filedrop/udl-personnelrecovery">client.filedrop.missionOps.personnelRecovery.<a href="./src/resources/filedrop/mission-ops/personnel-recovery.ts">create</a>([ ...body ]) -> void</code>

## ReportAndActivity

### Poi

Methods:

- <code title="post /filedrop/udl-poi">client.filedrop.reportAndActivity.poi.<a href="./src/resources/filedrop/report-and-activity/poi.ts">create</a>([ ...body ]) -> void</code>

### RfGeolocation

Methods:

- <code title="post /filedrop/udl-rfgeolocation">client.filedrop.reportAndActivity.rfGeolocation.<a href="./src/resources/filedrop/report-and-activity/rf-geolocation.ts">create</a>([ ...body ]) -> void</code>

## Surfaceobstructions

Methods:

- <code title="post /filedrop/udl-surfaceobstruction">client.filedrop.surfaceobstructions.<a href="./src/resources/filedrop/surfaceobstructions.ts">create</a>([ ...body ]) -> void</code>

## StateVectors

Methods:

- <code title="post /filedrop/udl-sv">client.filedrop.stateVectors.<a href="./src/resources/filedrop/state-vectors.ts">create</a>([ ...body ]) -> void</code>

## Trackroutes

Methods:

- <code title="post /filedrop/udl-trackroute">client.filedrop.trackroutes.<a href="./src/resources/filedrop/trackroutes.ts">create</a>({ ...params }) -> void</code>

## Tracks

Methods:

- <code title="post /filedrop/udl-tracks">client.filedrop.tracks.<a href="./src/resources/filedrop/tracks.ts">create</a>([ ...body ]) -> void</code>

## WeatherData

Methods:

- <code title="post /filedrop/udl-weatherdata">client.filedrop.weatherData.<a href="./src/resources/filedrop/weather-data.ts">create</a>([ ...body ]) -> void</code>

## WeatherReports

Methods:

- <code title="post /filedrop/udl-weatherreport">client.filedrop.weatherReports.<a href="./src/resources/filedrop/weather-reports.ts">create</a>([ ...body ]) -> void</code>

# GroundImagery

Methods:

- <code title="post /filedrop/udl-groundimagery">client.groundImagery.<a href="./src/resources/ground-imagery.ts">create</a>({ ...params }) -> void</code>

# H3geo

Methods:

- <code title="post /filedrop/udl-h3geo">client.h3geo.<a href="./src/resources/h3geo.ts">create</a>({ ...params }) -> void</code>

# IonoObservations

Methods:

- <code title="post /filedrop/udl-ionoobs">client.ionoObservations.<a href="./src/resources/iono-observations.ts">create</a>([ ...body ]) -> void</code>

# IsrCollections

Methods:

- <code title="post /filedrop/udl-isrcollection">client.isrCollections.<a href="./src/resources/isr-collections.ts">create</a>([ ...body ]) -> void</code>

# Items

Methods:

- <code title="post /filedrop/udl-item">client.items.<a href="./src/resources/items.ts">create</a>([ ...body ]) -> void</code>

# ItemTrackings

Methods:

- <code title="post /filedrop/udl-itemtracking">client.itemTrackings.<a href="./src/resources/item-trackings.ts">create</a>([ ...body ]) -> void</code>

# LaunchEvents

Methods:

- <code title="post /filedrop/udl-launchevent">client.launchEvents.<a href="./src/resources/launch-events.ts">create</a>([ ...body ]) -> void</code>

# LogisticsSupports

Methods:

- <code title="post /filedrop/udl-logisticssupport">client.logisticsSupports.<a href="./src/resources/logistics-supports.ts">create</a>([ ...body ]) -> void</code>

# Maneuvers

Methods:

- <code title="post /filedrop/udl-maneuver">client.maneuvers.<a href="./src/resources/maneuvers.ts">create</a>([ ...body ]) -> void</code>

# MissileTracks

Methods:

- <code title="post /filedrop/udl-missiletrack">client.missileTracks.<a href="./src/resources/missile-tracks.ts">create</a>([ ...body ]) -> void</code>

# UdlSar

Methods:

- <code title="post /filedrop/udl-sar">client.udlSar.<a href="./src/resources/udl-sar.ts">create</a>([ ...body ]) -> void</code>

# UdlSensorplan

Methods:

- <code title="post /filedrop/udl-sensorplan">client.udlSensorplan.<a href="./src/resources/udl-sensorplan.ts">create</a>([ ...body ]) -> void</code>

# UdlSgi

Methods:

- <code title="post /filedrop/udl-sgi">client.udlSgi.<a href="./src/resources/udl-sgi.ts">create</a>([ ...body ]) -> void</code>

# UdlSigact

Methods:

- <code title="post /filedrop/udl-sigact">client.udlSigact.<a href="./src/resources/udl-sigact.ts">create</a>([ ...body ]) -> void</code>

# UdlSigactText

Methods:

- <code title="post /filedrop/udl-sigact-text">client.udlSigactText.<a href="./src/resources/udl-sigact-text.ts">create</a>({ ...params }) -> void</code>

# UdlSkyimagery

Methods:

- <code title="post /filedrop/udl-skyimagery">client.udlSkyimagery.<a href="./src/resources/udl-skyimagery.ts">create</a>({ ...params }) -> void</code>

# UdlSoiobservationset

Methods:

- <code title="post /filedrop/udl-soiobservationset">client.udlSoiobservationset.<a href="./src/resources/udl-soiobservationset.ts">create</a>([ ...body ]) -> void</code>

# UdlSortieppr

Methods:

- <code title="post /filedrop/udl-sortieppr">client.udlSortieppr.<a href="./src/resources/udl-sortieppr.ts">create</a>([ ...body ]) -> void</code>

# UdlSpaceenvobs

Methods:

- <code title="post /filedrop/udl-spaceenvobs">client.udlSpaceenvobs.<a href="./src/resources/udl-spaceenvobs.ts">create</a>([ ...body ]) -> void</code>

# UdlStarcatalog

Methods:

- <code title="post /filedrop/udl-starcatalog">client.udlStarcatalog.<a href="./src/resources/udl-starcatalog.ts">create</a>([ ...body ]) -> void</code>

# Aircraft

Types:

- <code><a href="./src/resources/aircraft.ts">AircraftAbridged</a></code>
- <code><a href="./src/resources/aircraft.ts">AircraftFull</a></code>
- <code><a href="./src/resources/aircraft.ts">AircraftListResponse</a></code>
- <code><a href="./src/resources/aircraft.ts">AircraftCountResponse</a></code>
- <code><a href="./src/resources/aircraft.ts">AircraftTupleQueryResponse</a></code>

Methods:

- <code title="post /udl/aircraft">client.aircraft.<a href="./src/resources/aircraft.ts">create</a>({ ...params }) -> void</code>
- <code title="get /udl/aircraft/{id}">client.aircraft.<a href="./src/resources/aircraft.ts">retrieve</a>({ ...params }) -> AircraftFull</code>
- <code title="put /udl/aircraft/{id}">client.aircraft.<a href="./src/resources/aircraft.ts">update</a>({ ...params }) -> void</code>
- <code title="get /udl/aircraft">client.aircraft.<a href="./src/resources/aircraft.ts">list</a>() -> AircraftListResponse</code>
- <code title="get /udl/aircraft/count">client.aircraft.<a href="./src/resources/aircraft.ts">count</a>() -> string</code>
- <code title="get /udl/aircraft/queryhelp">client.aircraft.<a href="./src/resources/aircraft.ts">queryhelp</a>() -> void</code>
- <code title="get /udl/aircraft/tuple">client.aircraft.<a href="./src/resources/aircraft.ts">tupleQuery</a>({ ...params }) -> AircraftTupleQueryResponse</code>

# AircraftSorties

Types:

- <code><a href="./src/resources/aircraft-sorties.ts">AircraftSortyTupleResponse</a></code>

Methods:

- <code title="get /udl/aircraftsortie/{id}">client.aircraftSorties.<a href="./src/resources/aircraft-sorties.ts">retrieve</a>({ ...params }) -> AircraftsortieFull</code>
- <code title="put /udl/aircraftsortie/{id}">client.aircraftSorties.<a href="./src/resources/aircraft-sorties.ts">update</a>({ ...params }) -> void</code>
- <code title="get /udl/aircraftsortie/queryhelp">client.aircraftSorties.<a href="./src/resources/aircraft-sorties.ts">queryhelp</a>() -> void</code>
- <code title="get /udl/aircraftsortie/tuple">client.aircraftSorties.<a href="./src/resources/aircraft-sorties.ts">tuple</a>({ ...params }) -> AircraftSortyTupleResponse</code>

# AircraftStatuses

Types:

- <code><a href="./src/resources/aircraft-statuses/aircraft-statuses.ts">AircraftstatusAbridged</a></code>
- <code><a href="./src/resources/aircraft-statuses/aircraft-statuses.ts">AircraftStatusListResponse</a></code>
- <code><a href="./src/resources/aircraft-statuses/aircraft-statuses.ts">AircraftStatusCountResponse</a></code>

Methods:

- <code title="post /udl/aircraftstatus">client.aircraftStatuses.<a href="./src/resources/aircraft-statuses/aircraft-statuses.ts">create</a>({ ...params }) -> void</code>
- <code title="get /udl/aircraftstatus">client.aircraftStatuses.<a href="./src/resources/aircraft-statuses/aircraft-statuses.ts">list</a>() -> AircraftStatusListResponse</code>
- <code title="get /udl/aircraftstatus/count">client.aircraftStatuses.<a href="./src/resources/aircraft-statuses/aircraft-statuses.ts">count</a>() -> string</code>
- <code title="get /udl/aircraftstatus/queryhelp">client.aircraftStatuses.<a href="./src/resources/aircraft-statuses/aircraft-statuses.ts">queryhelp</a>() -> void</code>

## History

Types:

- <code><a href="./src/resources/aircraft-statuses/history.ts">HistoryListResponse</a></code>
- <code><a href="./src/resources/aircraft-statuses/history.ts">HistoryCountResponse</a></code>

Methods:

- <code title="get /udl/aircraftstatus/history">client.aircraftStatuses.history.<a href="./src/resources/aircraft-statuses/history.ts">list</a>({ ...params }) -> HistoryListResponse</code>
- <code title="get /udl/aircraftstatus/history/count">client.aircraftStatuses.history.<a href="./src/resources/aircraft-statuses/history.ts">count</a>() -> string</code>

# AircraftStatus

Types:

- <code><a href="./src/resources/aircraft-status.ts">AircraftStatusTupleResponse</a></code>

Methods:

- <code title="get /udl/aircraftstatus/{id}">client.aircraftStatus.<a href="./src/resources/aircraft-status.ts">retrieve</a>({ ...params }) -> AircraftstatusFull</code>
- <code title="put /udl/aircraftstatus/{id}">client.aircraftStatus.<a href="./src/resources/aircraft-status.ts">update</a>({ ...params }) -> void</code>
- <code title="delete /udl/aircraftstatus/{id}">client.aircraftStatus.<a href="./src/resources/aircraft-status.ts">delete</a>({ ...params }) -> void</code>
- <code title="get /udl/aircraftstatus/tuple">client.aircraftStatus.<a href="./src/resources/aircraft-status.ts">tuple</a>({ ...params }) -> AircraftStatusTupleResponse</code>

# AircraftStatusRemarks

Types:

- <code><a href="./src/resources/aircraft-status-remarks.ts">AircraftstatusremarkAbridged</a></code>
- <code><a href="./src/resources/aircraft-status-remarks.ts">AircraftstatusremarkFull</a></code>
- <code><a href="./src/resources/aircraft-status-remarks.ts">AircraftStatusRemarkListResponse</a></code>
- <code><a href="./src/resources/aircraft-status-remarks.ts">AircraftStatusRemarkCountResponse</a></code>
- <code><a href="./src/resources/aircraft-status-remarks.ts">AircraftStatusRemarkTupleResponse</a></code>

Methods:

- <code title="post /udl/aircraftstatusremark">client.aircraftStatusRemarks.<a href="./src/resources/aircraft-status-remarks.ts">create</a>({ ...params }) -> void</code>
- <code title="get /udl/aircraftstatusremark/{id}">client.aircraftStatusRemarks.<a href="./src/resources/aircraft-status-remarks.ts">retrieve</a>({ ...params }) -> AircraftstatusremarkFull</code>
- <code title="get /udl/aircraftstatusremark">client.aircraftStatusRemarks.<a href="./src/resources/aircraft-status-remarks.ts">list</a>() -> AircraftStatusRemarkListResponse</code>
- <code title="get /udl/aircraftstatusremark/count">client.aircraftStatusRemarks.<a href="./src/resources/aircraft-status-remarks.ts">count</a>() -> string</code>
- <code title="get /udl/aircraftstatusremark/queryhelp">client.aircraftStatusRemarks.<a href="./src/resources/aircraft-status-remarks.ts">queryhelp</a>() -> void</code>
- <code title="get /udl/aircraftstatusremark/tuple">client.aircraftStatusRemarks.<a href="./src/resources/aircraft-status-remarks.ts">tuple</a>({ ...params }) -> AircraftStatusRemarkTupleResponse</code>

# AirEvents

Methods:

- <code title="delete /udl/airevent/{id}">client.airEvents.<a href="./src/resources/air-events.ts">delete</a>({ ...params }) -> void</code>

# Airfields

Types:

- <code><a href="./src/resources/airfields.ts">AirfieldAbridged</a></code>
- <code><a href="./src/resources/airfields.ts">AirfieldFull</a></code>
- <code><a href="./src/resources/airfields.ts">AirfieldListResponse</a></code>
- <code><a href="./src/resources/airfields.ts">AirfieldCountResponse</a></code>
- <code><a href="./src/resources/airfields.ts">AirfieldTupleResponse</a></code>

Methods:

- <code title="post /udl/airfield">client.airfields.<a href="./src/resources/airfields.ts">create</a>({ ...params }) -> void</code>
- <code title="get /udl/airfield/{id}">client.airfields.<a href="./src/resources/airfields.ts">retrieve</a>({ ...params }) -> AirfieldFull</code>
- <code title="put /udl/airfield/{id}">client.airfields.<a href="./src/resources/airfields.ts">update</a>({ ...params }) -> void</code>
- <code title="get /udl/airfield">client.airfields.<a href="./src/resources/airfields.ts">list</a>() -> AirfieldListResponse</code>
- <code title="get /udl/airfield/count">client.airfields.<a href="./src/resources/airfields.ts">count</a>() -> string</code>
- <code title="get /udl/airfield/queryhelp">client.airfields.<a href="./src/resources/airfields.ts">queryhelp</a>() -> void</code>
- <code title="get /udl/airfield/tuple">client.airfields.<a href="./src/resources/airfields.ts">tuple</a>({ ...params }) -> AirfieldTupleResponse</code>

# AirfieldSlots

Types:

- <code><a href="./src/resources/airfield-slots.ts">AirfieldslotAbridged</a></code>
- <code><a href="./src/resources/airfield-slots.ts">AirfieldslotFull</a></code>
- <code><a href="./src/resources/airfield-slots.ts">AirfieldSlotListResponse</a></code>

Methods:

- <code title="post /udl/airfieldslot">client.airfieldSlots.<a href="./src/resources/airfield-slots.ts">create</a>({ ...params }) -> void</code>
- <code title="get /udl/airfieldslot">client.airfieldSlots.<a href="./src/resources/airfield-slots.ts">list</a>() -> AirfieldSlotListResponse</code>

# Airfieldslots

Types:

- <code><a href="./src/resources/airfieldslots.ts">AirfieldslotCountResponse</a></code>
- <code><a href="./src/resources/airfieldslots.ts">AirfieldslotTupleResponse</a></code>

Methods:

- <code title="get /udl/airfieldslot/{id}">client.airfieldslots.<a href="./src/resources/airfieldslots.ts">retrieve</a>({ ...params }) -> AirfieldslotFull</code>
- <code title="put /udl/airfieldslot/{id}">client.airfieldslots.<a href="./src/resources/airfieldslots.ts">update</a>({ ...params }) -> void</code>
- <code title="delete /udl/airfieldslot/{id}">client.airfieldslots.<a href="./src/resources/airfieldslots.ts">delete</a>({ ...params }) -> void</code>
- <code title="get /udl/airfieldslot/count">client.airfieldslots.<a href="./src/resources/airfieldslots.ts">count</a>() -> string</code>
- <code title="get /udl/airfieldslot/queryhelp">client.airfieldslots.<a href="./src/resources/airfieldslots.ts">queryhelp</a>() -> void</code>
- <code title="get /udl/airfieldslot/tuple">client.airfieldslots.<a href="./src/resources/airfieldslots.ts">tuple</a>({ ...params }) -> AirfieldslotTupleResponse</code>

# Airfieldslotconsumptions

Types:

- <code><a href="./src/resources/airfieldslotconsumptions.ts">AirfieldslotconsumptionAbridged</a></code>
- <code><a href="./src/resources/airfieldslotconsumptions.ts">AirfieldslotconsumptionFull</a></code>
- <code><a href="./src/resources/airfieldslotconsumptions.ts">AirfieldslotconsumptionListResponse</a></code>
- <code><a href="./src/resources/airfieldslotconsumptions.ts">AirfieldslotconsumptionCountResponse</a></code>

Methods:

- <code title="post /udl/airfieldslotconsumption">client.airfieldslotconsumptions.<a href="./src/resources/airfieldslotconsumptions.ts">create</a>({ ...params }) -> void</code>
- <code title="get /udl/airfieldslotconsumption">client.airfieldslotconsumptions.<a href="./src/resources/airfieldslotconsumptions.ts">list</a>() -> AirfieldslotconsumptionListResponse</code>
- <code title="get /udl/airfieldslotconsumption/count">client.airfieldslotconsumptions.<a href="./src/resources/airfieldslotconsumptions.ts">count</a>() -> string</code>
- <code title="get /udl/airfieldslotconsumption/queryhelp">client.airfieldslotconsumptions.<a href="./src/resources/airfieldslotconsumptions.ts">queryhelp</a>() -> void</code>

# Airfieldslotconsumption

Types:

- <code><a href="./src/resources/airfieldslotconsumption.ts">AirfieldslotconsumptionTupleResponse</a></code>

Methods:

- <code title="get /udl/airfieldslotconsumption/{id}">client.airfieldslotconsumption.<a href="./src/resources/airfieldslotconsumption.ts">retrieve</a>({ ...params }) -> AirfieldslotconsumptionFull</code>
- <code title="put /udl/airfieldslotconsumption/{id}">client.airfieldslotconsumption.<a href="./src/resources/airfieldslotconsumption.ts">update</a>({ ...params }) -> void</code>
- <code title="delete /udl/airfieldslotconsumption/{id}">client.airfieldslotconsumption.<a href="./src/resources/airfieldslotconsumption.ts">delete</a>({ ...params }) -> void</code>
- <code title="get /udl/airfieldslotconsumption/tuple">client.airfieldslotconsumption.<a href="./src/resources/airfieldslotconsumption.ts">tuple</a>({ ...params }) -> AirfieldslotconsumptionTupleResponse</code>

# Airfieldstatus

Types:

- <code><a href="./src/resources/airfieldstatus/airfieldstatus.ts">AirfieldstatusAbridged</a></code>
- <code><a href="./src/resources/airfieldstatus/airfieldstatus.ts">AirfieldstatusFull</a></code>
- <code><a href="./src/resources/airfieldstatus/airfieldstatus.ts">AirfieldstatusListResponse</a></code>
- <code><a href="./src/resources/airfieldstatus/airfieldstatus.ts">AirfieldstatusCountResponse</a></code>

Methods:

- <code title="post /udl/airfieldstatus">client.airfieldstatus.<a href="./src/resources/airfieldstatus/airfieldstatus.ts">create</a>({ ...params }) -> void</code>
- <code title="get /udl/airfieldstatus">client.airfieldstatus.<a href="./src/resources/airfieldstatus/airfieldstatus.ts">list</a>() -> AirfieldstatusListResponse</code>
- <code title="get /udl/airfieldstatus/count">client.airfieldstatus.<a href="./src/resources/airfieldstatus/airfieldstatus.ts">count</a>() -> string</code>
- <code title="get /udl/airfieldstatus/queryhelp">client.airfieldstatus.<a href="./src/resources/airfieldstatus/airfieldstatus.ts">queryhelp</a>() -> void</code>

## History

Types:

- <code><a href="./src/resources/airfieldstatus/history.ts">HistoryListResponse</a></code>
- <code><a href="./src/resources/airfieldstatus/history.ts">HistoryCountResponse</a></code>

Methods:

- <code title="get /udl/airfieldstatus/history">client.airfieldstatus.history.<a href="./src/resources/airfieldstatus/history.ts">list</a>({ ...params }) -> HistoryListResponse</code>
- <code title="get /udl/airfieldstatus/history/count">client.airfieldstatus.history.<a href="./src/resources/airfieldstatus/history.ts">count</a>() -> string</code>

# AirfieldStatus

Types:

- <code><a href="./src/resources/airfield-status.ts">AirfieldStatusTupleResponse</a></code>

Methods:

- <code title="get /udl/airfieldstatus/{id}">client.airfieldStatus.<a href="./src/resources/airfield-status.ts">retrieve</a>({ ...params }) -> AirfieldstatusFull</code>
- <code title="put /udl/airfieldstatus/{id}">client.airfieldStatus.<a href="./src/resources/airfield-status.ts">update</a>({ ...params }) -> void</code>
- <code title="delete /udl/airfieldstatus/{id}">client.airfieldStatus.<a href="./src/resources/airfield-status.ts">delete</a>({ ...params }) -> void</code>
- <code title="get /udl/airfieldstatus/tuple">client.airfieldStatus.<a href="./src/resources/airfield-status.ts">tuple</a>({ ...params }) -> AirfieldStatusTupleResponse</code>

# AirLoadPlans

Types:

- <code><a href="./src/resources/air-load-plans.ts">AirloadplanAbridged</a></code>
- <code><a href="./src/resources/air-load-plans.ts">AirloadplanFull</a></code>
- <code><a href="./src/resources/air-load-plans.ts">AirLoadPlanListResponse</a></code>
- <code><a href="./src/resources/air-load-plans.ts">AirLoadPlanCountResponse</a></code>
- <code><a href="./src/resources/air-load-plans.ts">AirLoadPlanTupleResponse</a></code>

Methods:

- <code title="post /udl/airloadplan">client.airLoadPlans.<a href="./src/resources/air-load-plans.ts">create</a>({ ...params }) -> void</code>
- <code title="get /udl/airloadplan/{id}">client.airLoadPlans.<a href="./src/resources/air-load-plans.ts">retrieve</a>({ ...params }) -> AirloadplanFull</code>
- <code title="get /udl/airloadplan">client.airLoadPlans.<a href="./src/resources/air-load-plans.ts">list</a>({ ...params }) -> AirLoadPlanListResponse</code>
- <code title="get /udl/airloadplan/count">client.airLoadPlans.<a href="./src/resources/air-load-plans.ts">count</a>({ ...params }) -> string</code>
- <code title="get /udl/airloadplan/queryhelp">client.airLoadPlans.<a href="./src/resources/air-load-plans.ts">queryhelp</a>() -> void</code>
- <code title="get /udl/airloadplan/tuple">client.airLoadPlans.<a href="./src/resources/air-load-plans.ts">tuple</a>({ ...params }) -> AirLoadPlanTupleResponse</code>

# Airloadplans

Methods:

- <code title="put /udl/airloadplan/{id}">client.airloadplans.<a href="./src/resources/airloadplans.ts">update</a>({ ...params }) -> void</code>
- <code title="delete /udl/airloadplan/{id}">client.airloadplans.<a href="./src/resources/airloadplans.ts">delete</a>({ ...params }) -> void</code>

# AirspaceControlOrders

Types:

- <code><a href="./src/resources/airspace-control-orders.ts">AirspacecontrolorderAbridged</a></code>
- <code><a href="./src/resources/airspace-control-orders.ts">AirspacecontrolorderFull</a></code>
- <code><a href="./src/resources/airspace-control-orders.ts">AirspaceControlOrderListResponse</a></code>
- <code><a href="./src/resources/airspace-control-orders.ts">AirspaceControlOrderCountResponse</a></code>
- <code><a href="./src/resources/airspace-control-orders.ts">AirspaceControlOrderTupleResponse</a></code>

Methods:

- <code title="post /udl/airspacecontrolorder">client.airspaceControlOrders.<a href="./src/resources/airspace-control-orders.ts">create</a>({ ...params }) -> void</code>
- <code title="get /udl/airspacecontrolorder/{id}">client.airspaceControlOrders.<a href="./src/resources/airspace-control-orders.ts">retrieve</a>({ ...params }) -> AirspacecontrolorderFull</code>
- <code title="get /udl/airspacecontrolorder">client.airspaceControlOrders.<a href="./src/resources/airspace-control-orders.ts">list</a>() -> AirspaceControlOrderListResponse</code>
- <code title="get /udl/airspacecontrolorder/count">client.airspaceControlOrders.<a href="./src/resources/airspace-control-orders.ts">count</a>() -> string</code>
- <code title="post /udl/airspacecontrolorder/createBulk">client.airspaceControlOrders.<a href="./src/resources/airspace-control-orders.ts">createBulk</a>([ ...body ]) -> void</code>
- <code title="get /udl/airspacecontrolorder/queryhelp">client.airspaceControlOrders.<a href="./src/resources/airspace-control-orders.ts">queryHelp</a>() -> void</code>
- <code title="get /udl/airspacecontrolorder/tuple">client.airspaceControlOrders.<a href="./src/resources/airspace-control-orders.ts">tuple</a>({ ...params }) -> AirspaceControlOrderTupleResponse</code>

# Airtaskingorders

Types:

- <code><a href="./src/resources/airtaskingorders.ts">AirtaskingorderAbridged</a></code>
- <code><a href="./src/resources/airtaskingorders.ts">AirtaskingorderListResponse</a></code>

Methods:

- <code title="get /udl/airtaskingorder">client.airtaskingorders.<a href="./src/resources/airtaskingorders.ts">list</a>() -> AirtaskingorderListResponse</code>

# AirTaskingOrders

Types:

- <code><a href="./src/resources/air-tasking-orders.ts">AirTaskingOrderFull</a></code>
- <code><a href="./src/resources/air-tasking-orders.ts">AirTaskingOrderCountResponse</a></code>
- <code><a href="./src/resources/air-tasking-orders.ts">AirTaskingOrderTupleResponse</a></code>

Methods:

- <code title="post /udl/airtaskingorder">client.airTaskingOrders.<a href="./src/resources/air-tasking-orders.ts">create</a>({ ...params }) -> void</code>
- <code title="get /udl/airtaskingorder/{id}">client.airTaskingOrders.<a href="./src/resources/air-tasking-orders.ts">retrieve</a>({ ...params }) -> AirTaskingOrderFull</code>
- <code title="get /udl/airtaskingorder/count">client.airTaskingOrders.<a href="./src/resources/air-tasking-orders.ts">count</a>() -> string</code>
- <code title="get /udl/airtaskingorder/queryhelp">client.airTaskingOrders.<a href="./src/resources/air-tasking-orders.ts">queryHelp</a>() -> void</code>
- <code title="get /udl/airtaskingorder/tuple">client.airTaskingOrders.<a href="./src/resources/air-tasking-orders.ts">tuple</a>({ ...params }) -> AirTaskingOrderTupleResponse</code>

# AirTransportMissions

Types:

- <code><a href="./src/resources/air-transport-missions/air-transport-missions.ts">AirTransportMissionAbridged</a></code>
- <code><a href="./src/resources/air-transport-missions/air-transport-missions.ts">AirTransportMissionListResponse</a></code>
- <code><a href="./src/resources/air-transport-missions/air-transport-missions.ts">AirTransportMissionCountResponse</a></code>
- <code><a href="./src/resources/air-transport-missions/air-transport-missions.ts">AirTransportMissionTupleResponse</a></code>

Methods:

- <code title="post /udl/airtransportmission">client.airTransportMissions.<a href="./src/resources/air-transport-missions/air-transport-missions.ts">create</a>({ ...params }) -> void</code>
- <code title="get /udl/airtransportmission/{id}">client.airTransportMissions.<a href="./src/resources/air-transport-missions/air-transport-missions.ts">retrieve</a>({ ...params }) -> AirTransportMissionFull</code>
- <code title="put /udl/airtransportmission/{id}">client.airTransportMissions.<a href="./src/resources/air-transport-missions/air-transport-missions.ts">update</a>({ ...params }) -> void</code>
- <code title="get /udl/airtransportmission">client.airTransportMissions.<a href="./src/resources/air-transport-missions/air-transport-missions.ts">list</a>({ ...params }) -> AirTransportMissionListResponse</code>
- <code title="get /udl/airtransportmission/count">client.airTransportMissions.<a href="./src/resources/air-transport-missions/air-transport-missions.ts">count</a>({ ...params }) -> string</code>
- <code title="get /udl/airtransportmission/queryhelp">client.airTransportMissions.<a href="./src/resources/air-transport-missions/air-transport-missions.ts">queryhelp</a>() -> void</code>
- <code title="get /udl/airtransportmission/tuple">client.airTransportMissions.<a href="./src/resources/air-transport-missions/air-transport-missions.ts">tuple</a>({ ...params }) -> AirTransportMissionTupleResponse</code>

## History

Types:

- <code><a href="./src/resources/air-transport-missions/history.ts">HistoryListResponse</a></code>
- <code><a href="./src/resources/air-transport-missions/history.ts">HistoryCountResponse</a></code>

Methods:

- <code title="get /udl/airtransportmission/history">client.airTransportMissions.history.<a href="./src/resources/air-transport-missions/history.ts">list</a>({ ...params }) -> HistoryListResponse</code>
- <code title="get /udl/airtransportmission/history/aodr">client.airTransportMissions.history.<a href="./src/resources/air-transport-missions/history.ts">aodr</a>({ ...params }) -> void</code>
- <code title="get /udl/airtransportmission/history/count">client.airTransportMissions.history.<a href="./src/resources/air-transport-missions/history.ts">count</a>({ ...params }) -> string</code>

# AIs

Types:

- <code><a href="./src/resources/ais/ais.ts">AIsAbridged</a></code>
- <code><a href="./src/resources/ais/ais.ts">AIListResponse</a></code>
- <code><a href="./src/resources/ais/ais.ts">AICountResponse</a></code>
- <code><a href="./src/resources/ais/ais.ts">AIHistoryCountResponse</a></code>
- <code><a href="./src/resources/ais/ais.ts">AITupleResponse</a></code>

Methods:

- <code title="get /udl/ais">client.ais.<a href="./src/resources/ais/ais.ts">list</a>({ ...params }) -> AIListResponse</code>
- <code title="get /udl/ais/count">client.ais.<a href="./src/resources/ais/ais.ts">count</a>({ ...params }) -> string</code>
- <code title="post /udl/ais/createBulk">client.ais.<a href="./src/resources/ais/ais.ts">createBulk</a>([ ...body ]) -> void</code>
- <code title="get /udl/ais/history/count">client.ais.<a href="./src/resources/ais/ais.ts">historyCount</a>({ ...params }) -> string</code>
- <code title="get /udl/ais/queryhelp">client.ais.<a href="./src/resources/ais/ais.ts">queryhelp</a>() -> void</code>
- <code title="get /udl/ais/tuple">client.ais.<a href="./src/resources/ais/ais.ts">tuple</a>({ ...params }) -> AITupleResponse</code>

## History

Types:

- <code><a href="./src/resources/ais/history.ts">HistoryListResponse</a></code>

Methods:

- <code title="get /udl/ais/history">client.ais.history.<a href="./src/resources/ais/history.ts">list</a>({ ...params }) -> HistoryListResponse</code>
- <code title="get /udl/ais/history/aodr">client.ais.history.<a href="./src/resources/ais/history.ts">aodr</a>({ ...params }) -> void</code>

# Antennas

Types:

- <code><a href="./src/resources/antennas.ts">AntennaAbridged</a></code>
- <code><a href="./src/resources/antennas.ts">AntennaFull</a></code>
- <code><a href="./src/resources/antennas.ts">AntennaListResponse</a></code>
- <code><a href="./src/resources/antennas.ts">AntennaCountResponse</a></code>
- <code><a href="./src/resources/antennas.ts">AntennaTupleResponse</a></code>

Methods:

- <code title="post /udl/antenna">client.antennas.<a href="./src/resources/antennas.ts">create</a>({ ...params }) -> void</code>
- <code title="get /udl/antenna/{id}">client.antennas.<a href="./src/resources/antennas.ts">retrieve</a>({ ...params }) -> AntennaFull</code>
- <code title="put /udl/antenna/{id}">client.antennas.<a href="./src/resources/antennas.ts">update</a>({ ...params }) -> void</code>
- <code title="get /udl/antenna">client.antennas.<a href="./src/resources/antennas.ts">list</a>() -> AntennaListResponse</code>
- <code title="delete /udl/antenna/{id}">client.antennas.<a href="./src/resources/antennas.ts">delete</a>({ ...params }) -> void</code>
- <code title="get /udl/antenna/count">client.antennas.<a href="./src/resources/antennas.ts">count</a>() -> string</code>
- <code title="get /udl/antenna/queryhelp">client.antennas.<a href="./src/resources/antennas.ts">queryhelp</a>() -> void</code>
- <code title="get /udl/antenna/tuple">client.antennas.<a href="./src/resources/antennas.ts">tuple</a>({ ...params }) -> AntennaTupleResponse</code>

# Onorbit

## AntennaDetails

Types:

- <code><a href="./src/resources/onorbit/antenna-details.ts">AntennaDetailsAbridged</a></code>
- <code><a href="./src/resources/onorbit/antenna-details.ts">AntennaDetailsFull</a></code>
- <code><a href="./src/resources/onorbit/antenna-details.ts">AntennaDetailListResponse</a></code>

Methods:

- <code title="post /udl/antennadetails">client.onorbit.antennaDetails.<a href="./src/resources/onorbit/antenna-details.ts">create</a>({ ...params }) -> void</code>
- <code title="get /udl/antennadetails/{id}">client.onorbit.antennaDetails.<a href="./src/resources/onorbit/antenna-details.ts">retrieve</a>({ ...params }) -> AntennaDetailsFull</code>
- <code title="put /udl/antennadetails/{id}">client.onorbit.antennaDetails.<a href="./src/resources/onorbit/antenna-details.ts">update</a>({ ...params }) -> void</code>
- <code title="get /udl/antennadetails">client.onorbit.antennaDetails.<a href="./src/resources/onorbit/antenna-details.ts">list</a>() -> AntennaDetailListResponse</code>
- <code title="delete /udl/antennadetails/{id}">client.onorbit.antennaDetails.<a href="./src/resources/onorbit/antenna-details.ts">delete</a>({ ...params }) -> void</code>

## DriftHistory

Types:

- <code><a href="./src/resources/onorbit/drift-history.ts">DrifthistoryAbridged</a></code>
- <code><a href="./src/resources/onorbit/drift-history.ts">DrifthistoryFull</a></code>

# Ephemeris

Types:

- <code><a href="./src/resources/ephemeris/ephemeris.ts">EphemerisAbridged</a></code>
- <code><a href="./src/resources/ephemeris/ephemeris.ts">EphemerisListResponse</a></code>
- <code><a href="./src/resources/ephemeris/ephemeris.ts">EphemerisCountResponse</a></code>

Methods:

- <code title="get /udl/ephemeris">client.ephemeris.<a href="./src/resources/ephemeris/ephemeris.ts">list</a>({ ...params }) -> EphemerisListResponse</code>
- <code title="get /udl/ephemeris/count">client.ephemeris.<a href="./src/resources/ephemeris/ephemeris.ts">count</a>({ ...params }) -> string</code>
- <code title="get /udl/ephemeris/queryhelp">client.ephemeris.<a href="./src/resources/ephemeris/ephemeris.ts">queryhelp</a>() -> void</code>

## AttitudeData

Types:

- <code><a href="./src/resources/ephemeris/attitude-data/attitude-data.ts">AttitudeDataAbridged</a></code>
- <code><a href="./src/resources/ephemeris/attitude-data/attitude-data.ts">AttitudeDataListResponse</a></code>
- <code><a href="./src/resources/ephemeris/attitude-data/attitude-data.ts">AttitudeDataCountResponse</a></code>

Methods:

- <code title="get /udl/attitudedata">client.ephemeris.attitudeData.<a href="./src/resources/ephemeris/attitude-data/attitude-data.ts">list</a>({ ...params }) -> AttitudeDataListResponse</code>
- <code title="get /udl/attitudedata/count">client.ephemeris.attitudeData.<a href="./src/resources/ephemeris/attitude-data/attitude-data.ts">count</a>({ ...params }) -> string</code>

### History

Types:

- <code><a href="./src/resources/ephemeris/attitude-data/history.ts">HistoryRetrieveResponse</a></code>
- <code><a href="./src/resources/ephemeris/attitude-data/history.ts">HistoryCountResponse</a></code>

Methods:

- <code title="get /udl/attitudedata/history">client.ephemeris.attitudeData.history.<a href="./src/resources/ephemeris/attitude-data/history.ts">retrieve</a>({ ...params }) -> HistoryRetrieveResponse</code>
- <code title="get /udl/attitudedata/history/aodr">client.ephemeris.attitudeData.history.<a href="./src/resources/ephemeris/attitude-data/history.ts">aodr</a>({ ...params }) -> void</code>
- <code title="get /udl/attitudedata/history/count">client.ephemeris.attitudeData.history.<a href="./src/resources/ephemeris/attitude-data/history.ts">count</a>({ ...params }) -> string</code>

## History

Types:

- <code><a href="./src/resources/ephemeris/history.ts">HistoryListResponse</a></code>
- <code><a href="./src/resources/ephemeris/history.ts">HistoryCountResponse</a></code>

Methods:

- <code title="get /udl/ephemeris/history">client.ephemeris.history.<a href="./src/resources/ephemeris/history.ts">list</a>({ ...params }) -> HistoryListResponse</code>
- <code title="get /udl/ephemeris/history/aodr">client.ephemeris.history.<a href="./src/resources/ephemeris/history.ts">aodr</a>({ ...params }) -> void</code>
- <code title="get /udl/ephemeris/history/count">client.ephemeris.history.<a href="./src/resources/ephemeris/history.ts">count</a>({ ...params }) -> string</code>

# AttitudeData

Types:

- <code><a href="./src/resources/attitude-data.ts">AttitudedataFull</a></code>
- <code><a href="./src/resources/attitude-data.ts">AttitudeDataTupleResponse</a></code>

Methods:

- <code title="get /udl/attitudedata/queryhelp">client.attitudeData.<a href="./src/resources/attitude-data.ts">queryHelp</a>() -> void</code>
- <code title="get /udl/attitudedata/tuple">client.attitudeData.<a href="./src/resources/attitude-data.ts">tuple</a>({ ...params }) -> AttitudeDataTupleResponse</code>

# AttitudeSets

Types:

- <code><a href="./src/resources/attitude-sets/attitude-sets.ts">AttitudesetAbridged</a></code>
- <code><a href="./src/resources/attitude-sets/attitude-sets.ts">AttitudeSetListResponse</a></code>
- <code><a href="./src/resources/attitude-sets/attitude-sets.ts">AttitudeSetCountResponse</a></code>
- <code><a href="./src/resources/attitude-sets/attitude-sets.ts">AttitudeSetTupleResponse</a></code>

Methods:

- <code title="post /udl/attitudeset">client.attitudeSets.<a href="./src/resources/attitude-sets/attitude-sets.ts">create</a>({ ...params }) -> void</code>
- <code title="get /udl/attitudeset">client.attitudeSets.<a href="./src/resources/attitude-sets/attitude-sets.ts">list</a>({ ...params }) -> AttitudeSetListResponse</code>
- <code title="get /udl/attitudeset/count">client.attitudeSets.<a href="./src/resources/attitude-sets/attitude-sets.ts">count</a>({ ...params }) -> string</code>
- <code title="get /udl/attitudeset/queryhelp">client.attitudeSets.<a href="./src/resources/attitude-sets/attitude-sets.ts">queryHelp</a>() -> void</code>
- <code title="get /udl/attitudeset/tuple">client.attitudeSets.<a href="./src/resources/attitude-sets/attitude-sets.ts">tuple</a>({ ...params }) -> AttitudeSetTupleResponse</code>

## History

Types:

- <code><a href="./src/resources/attitude-sets/history.ts">HistoryListResponse</a></code>
- <code><a href="./src/resources/attitude-sets/history.ts">HistoryCountResponse</a></code>

Methods:

- <code title="get /udl/attitudeset/history">client.attitudeSets.history.<a href="./src/resources/attitude-sets/history.ts">list</a>({ ...params }) -> HistoryListResponse</code>
- <code title="get /udl/attitudeset/history/aodr">client.attitudeSets.history.<a href="./src/resources/attitude-sets/history.ts">aodr</a>({ ...params }) -> void</code>
- <code title="get /udl/attitudeset/history/count">client.attitudeSets.history.<a href="./src/resources/attitude-sets/history.ts">count</a>({ ...params }) -> string</code>

# Attitudesets

Methods:

- <code title="get /udl/attitudeset/{id}">client.attitudesets.<a href="./src/resources/attitudesets.ts">retrieve</a>({ ...params }) -> AttitudesetFull</code>

# Batteries

Types:

- <code><a href="./src/resources/batteries.ts">BatteryAbridged</a></code>
- <code><a href="./src/resources/batteries.ts">BatteryFull</a></code>
- <code><a href="./src/resources/batteries.ts">BatteryListResponse</a></code>
- <code><a href="./src/resources/batteries.ts">BatteryCountResponse</a></code>
- <code><a href="./src/resources/batteries.ts">BatteryTupleResponse</a></code>

Methods:

- <code title="post /udl/battery">client.batteries.<a href="./src/resources/batteries.ts">create</a>({ ...params }) -> void</code>
- <code title="get /udl/battery/{id}">client.batteries.<a href="./src/resources/batteries.ts">retrieve</a>({ ...params }) -> BatteryFull</code>
- <code title="put /udl/battery/{id}">client.batteries.<a href="./src/resources/batteries.ts">update</a>({ ...params }) -> void</code>
- <code title="get /udl/battery">client.batteries.<a href="./src/resources/batteries.ts">list</a>() -> BatteryListResponse</code>
- <code title="delete /udl/battery/{id}">client.batteries.<a href="./src/resources/batteries.ts">delete</a>({ ...params }) -> void</code>
- <code title="get /udl/battery/count">client.batteries.<a href="./src/resources/batteries.ts">count</a>() -> string</code>
- <code title="get /udl/battery/queryhelp">client.batteries.<a href="./src/resources/batteries.ts">queryhelp</a>() -> void</code>
- <code title="get /udl/battery/tuple">client.batteries.<a href="./src/resources/batteries.ts">tuple</a>({ ...params }) -> BatteryTupleResponse</code>

# Batterydetails

Types:

- <code><a href="./src/resources/batterydetails.ts">BatterydetailsAbridged</a></code>
- <code><a href="./src/resources/batterydetails.ts">BatterydetailsFull</a></code>
- <code><a href="./src/resources/batterydetails.ts">BatterydetailListResponse</a></code>

Methods:

- <code title="post /udl/batterydetails">client.batterydetails.<a href="./src/resources/batterydetails.ts">create</a>({ ...params }) -> void</code>
- <code title="get /udl/batterydetails/{id}">client.batterydetails.<a href="./src/resources/batterydetails.ts">retrieve</a>({ ...params }) -> BatterydetailsFull</code>
- <code title="put /udl/batterydetails/{id}">client.batterydetails.<a href="./src/resources/batterydetails.ts">update</a>({ ...params }) -> void</code>
- <code title="get /udl/batterydetails">client.batterydetails.<a href="./src/resources/batterydetails.ts">list</a>() -> BatterydetailListResponse</code>
- <code title="delete /udl/batterydetails/{id}">client.batterydetails.<a href="./src/resources/batterydetails.ts">delete</a>({ ...params }) -> void</code>

# Beam

Types:

- <code><a href="./src/resources/beam.ts">BeamAbridged</a></code>
- <code><a href="./src/resources/beam.ts">BeamFull</a></code>
- <code><a href="./src/resources/beam.ts">BeamListResponse</a></code>
- <code><a href="./src/resources/beam.ts">BeamCountResponse</a></code>
- <code><a href="./src/resources/beam.ts">BeamTupleResponse</a></code>

Methods:

- <code title="post /udl/beam">client.beam.<a href="./src/resources/beam.ts">create</a>({ ...params }) -> void</code>
- <code title="get /udl/beam/{id}">client.beam.<a href="./src/resources/beam.ts">retrieve</a>({ ...params }) -> BeamFull</code>
- <code title="get /udl/beam">client.beam.<a href="./src/resources/beam.ts">list</a>() -> BeamListResponse</code>
- <code title="get /udl/beam/count">client.beam.<a href="./src/resources/beam.ts">count</a>() -> string</code>
- <code title="get /udl/beam/queryhelp">client.beam.<a href="./src/resources/beam.ts">queryHelp</a>() -> void</code>
- <code title="get /udl/beam/tuple">client.beam.<a href="./src/resources/beam.ts">tuple</a>({ ...params }) -> BeamTupleResponse</code>

# Beams

Methods:

- <code title="put /udl/beam/{id}">client.beams.<a href="./src/resources/beams.ts">update</a>({ ...params }) -> void</code>
- <code title="delete /udl/beam/{id}">client.beams.<a href="./src/resources/beams.ts">delete</a>({ ...params }) -> void</code>

# BeamContours

Types:

- <code><a href="./src/resources/beam-contours.ts">BeamcontourAbridged</a></code>
- <code><a href="./src/resources/beam-contours.ts">BeamcontourFull</a></code>
- <code><a href="./src/resources/beam-contours.ts">BeamContourListResponse</a></code>
- <code><a href="./src/resources/beam-contours.ts">BeamContourCountResponse</a></code>
- <code><a href="./src/resources/beam-contours.ts">BeamContourTupleResponse</a></code>

Methods:

- <code title="post /udl/beamcontour">client.beamContours.<a href="./src/resources/beam-contours.ts">create</a>({ ...params }) -> void</code>
- <code title="get /udl/beamcontour/{id}">client.beamContours.<a href="./src/resources/beam-contours.ts">retrieve</a>({ ...params }) -> BeamcontourFull</code>
- <code title="put /udl/beamcontour/{id}">client.beamContours.<a href="./src/resources/beam-contours.ts">update</a>({ ...params }) -> void</code>
- <code title="get /udl/beamcontour">client.beamContours.<a href="./src/resources/beam-contours.ts">list</a>({ ...params }) -> BeamContourListResponse</code>
- <code title="delete /udl/beamcontour/{id}">client.beamContours.<a href="./src/resources/beam-contours.ts">delete</a>({ ...params }) -> void</code>
- <code title="get /udl/beamcontour/count">client.beamContours.<a href="./src/resources/beam-contours.ts">count</a>({ ...params }) -> string</code>
- <code title="post /udl/beamcontour/createBulk">client.beamContours.<a href="./src/resources/beam-contours.ts">createBulk</a>([ ...body ]) -> void</code>
- <code title="get /udl/beamcontour/queryhelp">client.beamContours.<a href="./src/resources/beam-contours.ts">queryHelp</a>() -> void</code>
- <code title="get /udl/beamcontour/tuple">client.beamContours.<a href="./src/resources/beam-contours.ts">tuple</a>({ ...params }) -> BeamContourTupleResponse</code>

# Buses

Types:

- <code><a href="./src/resources/buses.ts">BusAbridged</a></code>
- <code><a href="./src/resources/buses.ts">BusFull</a></code>
- <code><a href="./src/resources/buses.ts">BusListResponse</a></code>
- <code><a href="./src/resources/buses.ts">BusCountResponse</a></code>
- <code><a href="./src/resources/buses.ts">BusTupleResponse</a></code>

Methods:

- <code title="post /udl/bus">client.buses.<a href="./src/resources/buses.ts">create</a>({ ...params }) -> void</code>
- <code title="get /udl/bus/{id}">client.buses.<a href="./src/resources/buses.ts">retrieve</a>({ ...params }) -> BusFull</code>
- <code title="put /udl/bus/{id}">client.buses.<a href="./src/resources/buses.ts">update</a>({ ...params }) -> void</code>
- <code title="get /udl/bus">client.buses.<a href="./src/resources/buses.ts">list</a>() -> BusListResponse</code>
- <code title="delete /udl/bus/{id}">client.buses.<a href="./src/resources/buses.ts">delete</a>({ ...params }) -> void</code>
- <code title="get /udl/bus/count">client.buses.<a href="./src/resources/buses.ts">count</a>() -> string</code>
- <code title="get /udl/bus/queryhelp">client.buses.<a href="./src/resources/buses.ts">queryHelp</a>() -> void</code>
- <code title="get /udl/bus/tuple">client.buses.<a href="./src/resources/buses.ts">tuple</a>({ ...params }) -> BusTupleResponse</code>

# Channels

Types:

- <code><a href="./src/resources/channels.ts">ChannelAbridged</a></code>
- <code><a href="./src/resources/channels.ts">ChannelFull</a></code>
- <code><a href="./src/resources/channels.ts">ChannelListResponse</a></code>
- <code><a href="./src/resources/channels.ts">ChannelCountResponse</a></code>
- <code><a href="./src/resources/channels.ts">ChannelTupleResponse</a></code>

Methods:

- <code title="post /udl/channel">client.channels.<a href="./src/resources/channels.ts">create</a>({ ...params }) -> void</code>
- <code title="get /udl/channel/{id}">client.channels.<a href="./src/resources/channels.ts">retrieve</a>({ ...params }) -> ChannelFull</code>
- <code title="put /udl/channel/{id}">client.channels.<a href="./src/resources/channels.ts">update</a>({ ...params }) -> void</code>
- <code title="get /udl/channel">client.channels.<a href="./src/resources/channels.ts">list</a>() -> ChannelListResponse</code>
- <code title="delete /udl/channel/{id}">client.channels.<a href="./src/resources/channels.ts">delete</a>({ ...params }) -> void</code>
- <code title="get /udl/channel/count">client.channels.<a href="./src/resources/channels.ts">count</a>() -> string</code>
- <code title="get /udl/channel/queryhelp">client.channels.<a href="./src/resources/channels.ts">queryhelp</a>() -> void</code>
- <code title="get /udl/channel/tuple">client.channels.<a href="./src/resources/channels.ts">tuple</a>({ ...params }) -> ChannelTupleResponse</code>

# Comms

Types:

- <code><a href="./src/resources/comms.ts">CommListResponse</a></code>
- <code><a href="./src/resources/comms.ts">CommCountResponse</a></code>

Methods:

- <code title="post /udl/comm">client.comms.<a href="./src/resources/comms.ts">create</a>({ ...params }) -> void</code>
- <code title="get /udl/comm">client.comms.<a href="./src/resources/comms.ts">list</a>() -> CommListResponse</code>
- <code title="get /udl/comm/count">client.comms.<a href="./src/resources/comms.ts">count</a>() -> string</code>

# Comm

Types:

- <code><a href="./src/resources/comm.ts">CommAbridged</a></code>
- <code><a href="./src/resources/comm.ts">CommFull</a></code>
- <code><a href="./src/resources/comm.ts">CommTupleResponse</a></code>

Methods:

- <code title="get /udl/comm/{id}">client.comm.<a href="./src/resources/comm.ts">retrieve</a>({ ...params }) -> CommFull</code>
- <code title="put /udl/comm/{id}">client.comm.<a href="./src/resources/comm.ts">update</a>({ ...params }) -> void</code>
- <code title="delete /udl/comm/{id}">client.comm.<a href="./src/resources/comm.ts">delete</a>({ ...params }) -> void</code>
- <code title="get /udl/comm/queryhelp">client.comm.<a href="./src/resources/comm.ts">queryhelp</a>() -> void</code>
- <code title="get /udl/comm/tuple">client.comm.<a href="./src/resources/comm.ts">tuple</a>({ ...params }) -> CommTupleResponse</code>

# Conjunction

Types:

- <code><a href="./src/resources/conjunction.ts">ConjunctionListResponse</a></code>
- <code><a href="./src/resources/conjunction.ts">ConjunctionCountResponse</a></code>
- <code><a href="./src/resources/conjunction.ts">ConjunctionHistoryResponse</a></code>

Methods:

- <code title="post /udl/conjunction">client.conjunction.<a href="./src/resources/conjunction.ts">create</a>({ ...params }) -> void</code>
- <code title="get /udl/conjunction">client.conjunction.<a href="./src/resources/conjunction.ts">list</a>({ ...params }) -> ConjunctionListResponse</code>
- <code title="get /udl/conjunction/count">client.conjunction.<a href="./src/resources/conjunction.ts">count</a>({ ...params }) -> string</code>
- <code title="post /udl/conjunction/createBulk">client.conjunction.<a href="./src/resources/conjunction.ts">createBulk</a>([ ...body ]) -> void</code>
- <code title="get /udl/conjunction/history">client.conjunction.<a href="./src/resources/conjunction.ts">history</a>({ ...params }) -> ConjunctionHistoryResponse</code>

# Cots

Methods:

- <code title="post /udl/cot">client.cots.<a href="./src/resources/cots.ts">create</a>({ ...params }) -> void</code>

# Countries

Types:

- <code><a href="./src/resources/countries.ts">CountryAbridged</a></code>
- <code><a href="./src/resources/countries.ts">CountryFull</a></code>
- <code><a href="./src/resources/countries.ts">CountryListResponse</a></code>
- <code><a href="./src/resources/countries.ts">CountryCountResponse</a></code>
- <code><a href="./src/resources/countries.ts">CountryTupleResponse</a></code>

Methods:

- <code title="post /udl/country">client.countries.<a href="./src/resources/countries.ts">create</a>({ ...params }) -> void</code>
- <code title="get /udl/country/{code}">client.countries.<a href="./src/resources/countries.ts">retrieve</a>({ ...params }) -> CountryFull</code>
- <code title="put /udl/country/{code}">client.countries.<a href="./src/resources/countries.ts">update</a>({ ...params }) -> void</code>
- <code title="get /udl/country">client.countries.<a href="./src/resources/countries.ts">list</a>() -> CountryListResponse</code>
- <code title="delete /udl/country/{code}">client.countries.<a href="./src/resources/countries.ts">delete</a>({ ...params }) -> void</code>
- <code title="get /udl/country/count">client.countries.<a href="./src/resources/countries.ts">count</a>() -> string</code>
- <code title="get /udl/country/queryhelp">client.countries.<a href="./src/resources/countries.ts">queryhelp</a>() -> void</code>
- <code title="get /udl/country/tuple">client.countries.<a href="./src/resources/countries.ts">tuple</a>({ ...params }) -> CountryTupleResponse</code>

# Elset

Methods:

- <code title="get /udl/currentelset/queryhelp">client.elset.<a href="./src/resources/elset.ts">queryhelp</a>() -> void</code>

# LinkStatus

## Datalink

Types:

- <code><a href="./src/resources/link-status/datalink.ts">DatalinkAbridged</a></code>
- <code><a href="./src/resources/link-status/datalink.ts">DatalinkFull</a></code>
- <code><a href="./src/resources/link-status/datalink.ts">DatalinkListResponse</a></code>
- <code><a href="./src/resources/link-status/datalink.ts">DatalinkCountResponse</a></code>
- <code><a href="./src/resources/link-status/datalink.ts">DatalinkTupleResponse</a></code>

Methods:

- <code title="post /udl/datalink">client.linkStatus.datalink.<a href="./src/resources/link-status/datalink.ts">create</a>({ ...params }) -> void</code>
- <code title="get /udl/datalink">client.linkStatus.datalink.<a href="./src/resources/link-status/datalink.ts">list</a>({ ...params }) -> DatalinkListResponse</code>
- <code title="get /udl/datalink/count">client.linkStatus.datalink.<a href="./src/resources/link-status/datalink.ts">count</a>({ ...params }) -> string</code>
- <code title="get /udl/datalink/queryhelp">client.linkStatus.datalink.<a href="./src/resources/link-status/datalink.ts">queryhelp</a>() -> void</code>
- <code title="get /udl/datalink/tuple">client.linkStatus.datalink.<a href="./src/resources/link-status/datalink.ts">tuple</a>({ ...params }) -> DatalinkTupleResponse</code>

# SupportingData

## Dataowner

Types:

- <code><a href="./src/resources/supporting-data/dataowner.ts">DataownerAbridged</a></code>
- <code><a href="./src/resources/supporting-data/dataowner.ts">DataownerRetrieveResponse</a></code>
- <code><a href="./src/resources/supporting-data/dataowner.ts">DataownerCountResponse</a></code>

Methods:

- <code title="get /udl/dataowner">client.supportingData.dataowner.<a href="./src/resources/supporting-data/dataowner.ts">retrieve</a>() -> DataownerRetrieveResponse</code>
- <code title="get /udl/dataowner/count">client.supportingData.dataowner.<a href="./src/resources/supporting-data/dataowner.ts">count</a>() -> string</code>

## DataownerTypes

Types:

- <code><a href="./src/resources/supporting-data/dataowner-types.ts">DataownerTypeListResponse</a></code>

Methods:

- <code title="get /udl/dataowner/getDataOwnerTypes">client.supportingData.dataownerTypes.<a href="./src/resources/supporting-data/dataowner-types.ts">list</a>() -> DataownerTypeListResponse</code>

## DataTypes

Types:

- <code><a href="./src/resources/supporting-data/data-types.ts">DataTypeListResponse</a></code>

Methods:

- <code title="get /udl/dataowner/getDataTypes">client.supportingData.dataTypes.<a href="./src/resources/supporting-data/data-types.ts">list</a>() -> DataTypeListResponse</code>

## ProviderMetadata

Types:

- <code><a href="./src/resources/supporting-data/provider-metadata.ts">ProviderMetadataRetrieveResponse</a></code>

Methods:

- <code title="get /udl/dataowner/providerMetadata">client.supportingData.providerMetadata.<a href="./src/resources/supporting-data/provider-metadata.ts">retrieve</a>() -> ProviderMetadataRetrieveResponse</code>

## QueryHelp

Methods:

- <code title="get /udl/dataowner/queryhelp">client.supportingData.queryHelp.<a href="./src/resources/supporting-data/query-help.ts">retrieve</a>() -> void</code>

# TdoaFdoa

## Diffofarrival

Types:

- <code><a href="./src/resources/tdoa-fdoa/diffofarrival/diffofarrival.ts">DiffofarrivalAbridged</a></code>
- <code><a href="./src/resources/tdoa-fdoa/diffofarrival/diffofarrival.ts">DiffofarrivalFull</a></code>
- <code><a href="./src/resources/tdoa-fdoa/diffofarrival/diffofarrival.ts">DiffofarrivalListResponse</a></code>
- <code><a href="./src/resources/tdoa-fdoa/diffofarrival/diffofarrival.ts">DiffofarrivalCountResponse</a></code>

Methods:

- <code title="post /udl/diffofarrival">client.tdoaFdoa.diffofarrival.<a href="./src/resources/tdoa-fdoa/diffofarrival/diffofarrival.ts">create</a>({ ...params }) -> void</code>
- <code title="get /udl/diffofarrival">client.tdoaFdoa.diffofarrival.<a href="./src/resources/tdoa-fdoa/diffofarrival/diffofarrival.ts">list</a>({ ...params }) -> DiffofarrivalListResponse</code>
- <code title="get /udl/diffofarrival/count">client.tdoaFdoa.diffofarrival.<a href="./src/resources/tdoa-fdoa/diffofarrival/diffofarrival.ts">count</a>({ ...params }) -> string</code>
- <code title="post /udl/diffofarrival/createBulk">client.tdoaFdoa.diffofarrival.<a href="./src/resources/tdoa-fdoa/diffofarrival/diffofarrival.ts">createBulk</a>([ ...body ]) -> void</code>

### History

Types:

- <code><a href="./src/resources/tdoa-fdoa/diffofarrival/history.ts">HistoryListResponse</a></code>

Methods:

- <code title="get /udl/diffofarrival/history">client.tdoaFdoa.diffofarrival.history.<a href="./src/resources/tdoa-fdoa/diffofarrival/history.ts">list</a>({ ...params }) -> HistoryListResponse</code>
- <code title="get /udl/diffofarrival/history/aodr">client.tdoaFdoa.diffofarrival.history.<a href="./src/resources/tdoa-fdoa/diffofarrival/history.ts">aodr</a>({ ...params }) -> void</code>

# DiplomaticClearance

Types:

- <code><a href="./src/resources/diplomatic-clearance/diplomatic-clearance.ts">DiplomaticClearanceListResponse</a></code>
- <code><a href="./src/resources/diplomatic-clearance/diplomatic-clearance.ts">DiplomaticClearanceCountResponse</a></code>
- <code><a href="./src/resources/diplomatic-clearance/diplomatic-clearance.ts">DiplomaticClearanceTupleResponse</a></code>

Methods:

- <code title="post /udl/diplomaticclearance">client.diplomaticClearance.<a href="./src/resources/diplomatic-clearance/diplomatic-clearance.ts">create</a>({ ...params }) -> void</code>
- <code title="get /udl/diplomaticclearance/{id}">client.diplomaticClearance.<a href="./src/resources/diplomatic-clearance/diplomatic-clearance.ts">retrieve</a>({ ...params }) -> DiplomaticclearanceFull</code>
- <code title="put /udl/diplomaticclearance/{id}">client.diplomaticClearance.<a href="./src/resources/diplomatic-clearance/diplomatic-clearance.ts">update</a>({ ...params }) -> void</code>
- <code title="get /udl/diplomaticclearance">client.diplomaticClearance.<a href="./src/resources/diplomatic-clearance/diplomatic-clearance.ts">list</a>({ ...params }) -> DiplomaticClearanceListResponse</code>
- <code title="delete /udl/diplomaticclearance/{id}">client.diplomaticClearance.<a href="./src/resources/diplomatic-clearance/diplomatic-clearance.ts">delete</a>({ ...params }) -> void</code>
- <code title="get /udl/diplomaticclearance/count">client.diplomaticClearance.<a href="./src/resources/diplomatic-clearance/diplomatic-clearance.ts">count</a>({ ...params }) -> string</code>
- <code title="post /udl/diplomaticclearance/createBulk">client.diplomaticClearance.<a href="./src/resources/diplomatic-clearance/diplomatic-clearance.ts">createBulk</a>([ ...body ]) -> void</code>
- <code title="get /udl/diplomaticclearance/queryhelp">client.diplomaticClearance.<a href="./src/resources/diplomatic-clearance/diplomatic-clearance.ts">queryhelp</a>() -> void</code>
- <code title="get /udl/diplomaticclearance/tuple">client.diplomaticClearance.<a href="./src/resources/diplomatic-clearance/diplomatic-clearance.ts">tuple</a>({ ...params }) -> DiplomaticClearanceTupleResponse</code>

## History

Types:

- <code><a href="./src/resources/diplomatic-clearance/history.ts">HistoryListResponse</a></code>
- <code><a href="./src/resources/diplomatic-clearance/history.ts">HistoryCountResponse</a></code>

Methods:

- <code title="get /udl/diplomaticclearance/history">client.diplomaticClearance.history.<a href="./src/resources/diplomatic-clearance/history.ts">list</a>({ ...params }) -> HistoryListResponse</code>
- <code title="get /udl/diplomaticclearance/history/aodr">client.diplomaticClearance.history.<a href="./src/resources/diplomatic-clearance/history.ts">aodr</a>({ ...params }) -> void</code>
- <code title="get /udl/diplomaticclearance/history/count">client.diplomaticClearance.history.<a href="./src/resources/diplomatic-clearance/history.ts">count</a>({ ...params }) -> string</code>

# DriftHistory

Types:

- <code><a href="./src/resources/drift-history.ts">DriftHistoryListResponse</a></code>
- <code><a href="./src/resources/drift-history.ts">DriftHistoryCountResponse</a></code>
- <code><a href="./src/resources/drift-history.ts">DriftHistoryTupleResponse</a></code>

Methods:

- <code title="get /udl/drifthistory">client.driftHistory.<a href="./src/resources/drift-history.ts">list</a>() -> DriftHistoryListResponse</code>
- <code title="get /udl/drifthistory/count">client.driftHistory.<a href="./src/resources/drift-history.ts">count</a>() -> string</code>
- <code title="get /udl/drifthistory/queryhelp">client.driftHistory.<a href="./src/resources/drift-history.ts">queryhelp</a>() -> void</code>
- <code title="get /udl/drifthistory/tuple">client.driftHistory.<a href="./src/resources/drift-history.ts">tuple</a>({ ...params }) -> DriftHistoryTupleResponse</code>

# DriftHistories

Types:

- <code><a href="./src/resources/drift-histories.ts">DriftHistory</a></code>

Methods:

- <code title="get /udl/drifthistory/{id}">client.driftHistories.<a href="./src/resources/drift-histories.ts">retrieve</a>({ ...params }) -> DrifthistoryFull</code>

# MissionOps

## EffectRequests

Types:

- <code><a href="./src/resources/mission-ops/effect-requests/effect-requests.ts">EffectRequest</a></code>
- <code><a href="./src/resources/mission-ops/effect-requests/effect-requests.ts">EffectRequestAbridged</a></code>
- <code><a href="./src/resources/mission-ops/effect-requests/effect-requests.ts">EffectRequestListResponse</a></code>

Methods:

- <code title="post /udl/effectrequest">client.missionOps.effectRequests.<a href="./src/resources/mission-ops/effect-requests/effect-requests.ts">create</a>({ ...params }) -> void</code>
- <code title="get /udl/effectrequest">client.missionOps.effectRequests.<a href="./src/resources/mission-ops/effect-requests/effect-requests.ts">list</a>({ ...params }) -> EffectRequestListResponse</code>

### History

Types:

- <code><a href="./src/resources/mission-ops/effect-requests/history.ts">EffectRequestFull</a></code>

## EffectResponses

Types:

- <code><a href="./src/resources/mission-ops/effect-responses/effect-responses.ts">EffectResponse</a></code>
- <code><a href="./src/resources/mission-ops/effect-responses/effect-responses.ts">EffectResponseAbridged</a></code>

### History

Types:

- <code><a href="./src/resources/mission-ops/effect-responses/history.ts">EffectResponseFull</a></code>

# EffectRequests

Types:

- <code><a href="./src/resources/effect-requests/effect-requests.ts">EffectRequestCountResponse</a></code>
- <code><a href="./src/resources/effect-requests/effect-requests.ts">EffectRequestHistoryCountResponse</a></code>
- <code><a href="./src/resources/effect-requests/effect-requests.ts">EffectRequestTupleResponse</a></code>

Methods:

- <code title="get /udl/effectrequest/{id}">client.effectRequests.<a href="./src/resources/effect-requests/effect-requests.ts">retrieve</a>({ ...params }) -> EffectRequest</code>
- <code title="get /udl/effectrequest/count">client.effectRequests.<a href="./src/resources/effect-requests/effect-requests.ts">count</a>({ ...params }) -> string</code>
- <code title="post /udl/effectrequest/createBulk">client.effectRequests.<a href="./src/resources/effect-requests/effect-requests.ts">createBulk</a>([ ...body ]) -> void</code>
- <code title="get /udl/effectrequest/history/count">client.effectRequests.<a href="./src/resources/effect-requests/effect-requests.ts">historyCount</a>({ ...params }) -> string</code>
- <code title="get /udl/effectrequest/queryhelp">client.effectRequests.<a href="./src/resources/effect-requests/effect-requests.ts">queryHelp</a>() -> void</code>
- <code title="get /udl/effectrequest/tuple">client.effectRequests.<a href="./src/resources/effect-requests/effect-requests.ts">tuple</a>({ ...params }) -> EffectRequestTupleResponse</code>

## History

Types:

- <code><a href="./src/resources/effect-requests/history.ts">HistoryListResponse</a></code>

Methods:

- <code title="get /udl/effectrequest/history">client.effectRequests.history.<a href="./src/resources/effect-requests/history.ts">list</a>({ ...params }) -> HistoryListResponse</code>
- <code title="get /udl/effectrequest/history/aodr">client.effectRequests.history.<a href="./src/resources/effect-requests/history.ts">aodr</a>({ ...params }) -> void</code>

# EffectResponses

Types:

- <code><a href="./src/resources/effect-responses/effect-responses.ts">EffectResponseListResponse</a></code>
- <code><a href="./src/resources/effect-responses/effect-responses.ts">EffectResponseCountResponse</a></code>
- <code><a href="./src/resources/effect-responses/effect-responses.ts">EffectResponseTupleResponse</a></code>

Methods:

- <code title="post /udl/effectresponse">client.effectResponses.<a href="./src/resources/effect-responses/effect-responses.ts">create</a>({ ...params }) -> void</code>
- <code title="get /udl/effectresponse/{id}">client.effectResponses.<a href="./src/resources/effect-responses/effect-responses.ts">retrieve</a>({ ...params }) -> EffectResponse</code>
- <code title="get /udl/effectresponse">client.effectResponses.<a href="./src/resources/effect-responses/effect-responses.ts">list</a>({ ...params }) -> EffectResponseListResponse</code>
- <code title="get /udl/effectresponse/count">client.effectResponses.<a href="./src/resources/effect-responses/effect-responses.ts">count</a>({ ...params }) -> string</code>
- <code title="post /udl/effectresponse/createBulk">client.effectResponses.<a href="./src/resources/effect-responses/effect-responses.ts">createBulk</a>([ ...body ]) -> void</code>
- <code title="get /udl/effectresponse/queryhelp">client.effectResponses.<a href="./src/resources/effect-responses/effect-responses.ts">queryHelp</a>() -> void</code>
- <code title="get /udl/effectresponse/tuple">client.effectResponses.<a href="./src/resources/effect-responses/effect-responses.ts">tuple</a>({ ...params }) -> EffectResponseTupleResponse</code>

## History

Types:

- <code><a href="./src/resources/effect-responses/history.ts">HistoryListResponse</a></code>
- <code><a href="./src/resources/effect-responses/history.ts">HistoryCountResponse</a></code>

Methods:

- <code title="get /udl/effectresponse/history">client.effectResponses.history.<a href="./src/resources/effect-responses/history.ts">list</a>({ ...params }) -> HistoryListResponse</code>
- <code title="get /udl/effectresponse/history/aodr">client.effectResponses.history.<a href="./src/resources/effect-responses/history.ts">aodr</a>({ ...params }) -> void</code>
- <code title="get /udl/effectresponse/history/count">client.effectResponses.history.<a href="./src/resources/effect-responses/history.ts">count</a>({ ...params }) -> string</code>

# Elsets

Types:

- <code><a href="./src/resources/elsets/elsets.ts">Elset</a></code>
- <code><a href="./src/resources/elsets/elsets.ts">ElsetAbridged</a></code>
- <code><a href="./src/resources/elsets/elsets.ts">ElsetListResponse</a></code>
- <code><a href="./src/resources/elsets/elsets.ts">ElsetCountResponse</a></code>
- <code><a href="./src/resources/elsets/elsets.ts">ElsetTupleResponse</a></code>

Methods:

- <code title="post /udl/elset">client.elsets.<a href="./src/resources/elsets/elsets.ts">create</a>({ ...params }) -> void</code>
- <code title="get /udl/elset/{id}">client.elsets.<a href="./src/resources/elsets/elsets.ts">retrieve</a>({ ...params }) -> ElsetFull</code>
- <code title="get /udl/elset">client.elsets.<a href="./src/resources/elsets/elsets.ts">list</a>({ ...params }) -> ElsetListResponse</code>
- <code title="get /udl/elset/count">client.elsets.<a href="./src/resources/elsets/elsets.ts">count</a>({ ...params }) -> string</code>
- <code title="post /udl/elset/createBulk">client.elsets.<a href="./src/resources/elsets/elsets.ts">createBulk</a>([ ...body ]) -> void</code>
- <code title="post /udl/elset/createBulkFromTLE">client.elsets.<a href="./src/resources/elsets/elsets.ts">createBulkFromTle</a>({ ...params }) -> void</code>
- <code title="get /udl/elset/queryhelp">client.elsets.<a href="./src/resources/elsets/elsets.ts">queryhelp</a>() -> void</code>
- <code title="get /udl/elset/tuple">client.elsets.<a href="./src/resources/elsets/elsets.ts">tuple</a>({ ...params }) -> ElsetTupleResponse</code>

## Current

Types:

- <code><a href="./src/resources/elsets/current.ts">CurrentListResponse</a></code>
- <code><a href="./src/resources/elsets/current.ts">CurrentTupleResponse</a></code>

Methods:

- <code title="get /udl/elset/current">client.elsets.current.<a href="./src/resources/elsets/current.ts">list</a>() -> CurrentListResponse</code>
- <code title="get /udl/elset/current/tuple">client.elsets.current.<a href="./src/resources/elsets/current.ts">tuple</a>({ ...params }) -> CurrentTupleResponse</code>

## History

Types:

- <code><a href="./src/resources/elsets/history.ts">HistoryListResponse</a></code>
- <code><a href="./src/resources/elsets/history.ts">HistoryCountResponse</a></code>

Methods:

- <code title="get /udl/elset/history">client.elsets.history.<a href="./src/resources/elsets/history.ts">list</a>({ ...params }) -> HistoryListResponse</code>
- <code title="get /udl/elset/history/aodr">client.elsets.history.<a href="./src/resources/elsets/history.ts">aodr</a>({ ...params }) -> void</code>
- <code title="get /udl/elset/history/count">client.elsets.history.<a href="./src/resources/elsets/history.ts">count</a>({ ...params }) -> string</code>

# Engines

Types:

- <code><a href="./src/resources/engines.ts">Engine</a></code>
- <code><a href="./src/resources/engines.ts">EngineAbridged</a></code>
- <code><a href="./src/resources/engines.ts">EngineListResponse</a></code>
- <code><a href="./src/resources/engines.ts">EngineCountResponse</a></code>
- <code><a href="./src/resources/engines.ts">EngineTupleResponse</a></code>

Methods:

- <code title="post /udl/engine">client.engines.<a href="./src/resources/engines.ts">create</a>({ ...params }) -> void</code>
- <code title="get /udl/engine/{id}">client.engines.<a href="./src/resources/engines.ts">retrieve</a>({ ...params }) -> Engine</code>
- <code title="put /udl/engine/{id}">client.engines.<a href="./src/resources/engines.ts">update</a>({ ...params }) -> void</code>
- <code title="get /udl/engine">client.engines.<a href="./src/resources/engines.ts">list</a>() -> EngineListResponse</code>
- <code title="delete /udl/engine/{id}">client.engines.<a href="./src/resources/engines.ts">delete</a>({ ...params }) -> void</code>
- <code title="get /udl/engine/count">client.engines.<a href="./src/resources/engines.ts">count</a>() -> string</code>
- <code title="get /udl/engine/queryhelp">client.engines.<a href="./src/resources/engines.ts">queryhelp</a>() -> void</code>
- <code title="get /udl/engine/tuple">client.engines.<a href="./src/resources/engines.ts">tuple</a>({ ...params }) -> EngineTupleResponse</code>

# Enginedetails

Types:

- <code><a href="./src/resources/enginedetails.ts">EngineDetailsAbridged</a></code>
- <code><a href="./src/resources/enginedetails.ts">EnginedetailListResponse</a></code>

Methods:

- <code title="get /udl/enginedetails">client.enginedetails.<a href="./src/resources/enginedetails.ts">list</a>() -> EnginedetailListResponse</code>

# EngineDetails

Types:

- <code><a href="./src/resources/engine-details.ts">EngineDetailsFull</a></code>

Methods:

- <code title="post /udl/enginedetails">client.engineDetails.<a href="./src/resources/engine-details.ts">create</a>({ ...params }) -> void</code>
- <code title="get /udl/enginedetails/{id}">client.engineDetails.<a href="./src/resources/engine-details.ts">retrieve</a>({ ...params }) -> EngineDetailsFull</code>
- <code title="put /udl/enginedetails/{id}">client.engineDetails.<a href="./src/resources/engine-details.ts">update</a>({ ...params }) -> void</code>
- <code title="delete /udl/enginedetails/{id}">client.engineDetails.<a href="./src/resources/engine-details.ts">delete</a>({ ...params }) -> void</code>

# Entities

Types:

- <code><a href="./src/resources/entities.ts">EntityAbridged</a></code>
- <code><a href="./src/resources/entities.ts">EntityFull</a></code>
- <code><a href="./src/resources/entities.ts">EntityCountResponse</a></code>
- <code><a href="./src/resources/entities.ts">EntityGetAllTypesResponse</a></code>
- <code><a href="./src/resources/entities.ts">EntityTupleResponse</a></code>

Methods:

- <code title="post /udl/entity">client.entities.<a href="./src/resources/entities.ts">create</a>({ ...params }) -> void</code>
- <code title="get /udl/entity/{id}">client.entities.<a href="./src/resources/entities.ts">retrieve</a>({ ...params }) -> EntityFull</code>
- <code title="put /udl/entity/{id}">client.entities.<a href="./src/resources/entities.ts">update</a>({ ...params }) -> void</code>
- <code title="delete /udl/entity/{id}">client.entities.<a href="./src/resources/entities.ts">delete</a>({ ...params }) -> void</code>
- <code title="get /udl/entity/count">client.entities.<a href="./src/resources/entities.ts">count</a>() -> string</code>
- <code title="get /udl/entity/getAllTypes">client.entities.<a href="./src/resources/entities.ts">getAllTypes</a>() -> EntityGetAllTypesResponse</code>
- <code title="get /udl/entity/queryhelp">client.entities.<a href="./src/resources/entities.ts">queryHelp</a>() -> void</code>
- <code title="get /udl/entity/tuple">client.entities.<a href="./src/resources/entities.ts">tuple</a>({ ...params }) -> EntityTupleResponse</code>

# EoObservations

Types:

- <code><a href="./src/resources/eo-observations/eo-observations.ts">EoObservationAbridged</a></code>
- <code><a href="./src/resources/eo-observations/eo-observations.ts">EoObservationListResponse</a></code>
- <code><a href="./src/resources/eo-observations/eo-observations.ts">EoObservationCountResponse</a></code>

Methods:

- <code title="post /udl/eoobservation">client.eoObservations.<a href="./src/resources/eo-observations/eo-observations.ts">create</a>({ ...params }) -> void</code>
- <code title="get /udl/eoobservation">client.eoObservations.<a href="./src/resources/eo-observations/eo-observations.ts">list</a>({ ...params }) -> EoObservationListResponse</code>
- <code title="get /udl/eoobservation/count">client.eoObservations.<a href="./src/resources/eo-observations/eo-observations.ts">count</a>({ ...params }) -> string</code>
- <code title="post /udl/eoobservation/createBulk">client.eoObservations.<a href="./src/resources/eo-observations/eo-observations.ts">createBulk</a>([ ...body ]) -> void</code>

## History

Types:

- <code><a href="./src/resources/eo-observations/history.ts">EoObservationFull</a></code>
- <code><a href="./src/resources/eo-observations/history.ts">HistoryListResponse</a></code>
- <code><a href="./src/resources/eo-observations/history.ts">HistoryCountResponse</a></code>

Methods:

- <code title="get /udl/eoobservation/history">client.eoObservations.history.<a href="./src/resources/eo-observations/history.ts">list</a>({ ...params }) -> HistoryListResponse</code>
- <code title="get /udl/eoobservation/history/aodr">client.eoObservations.history.<a href="./src/resources/eo-observations/history.ts">aodr</a>({ ...params }) -> void</code>
- <code title="get /udl/eoobservation/history/count">client.eoObservations.history.<a href="./src/resources/eo-observations/history.ts">count</a>({ ...params }) -> string</code>

# Eoobservations

Types:

- <code><a href="./src/resources/eoobservations.ts">EoobservationTupleResponse</a></code>

Methods:

- <code title="get /udl/eoobservation/{id}">client.eoobservations.<a href="./src/resources/eoobservations.ts">retrieve</a>({ ...params }) -> EoObservationFull</code>
- <code title="get /udl/eoobservation/queryhelp">client.eoobservations.<a href="./src/resources/eoobservations.ts">queryhelp</a>() -> void</code>
- <code title="get /udl/eoobservation/tuple">client.eoobservations.<a href="./src/resources/eoobservations.ts">tuple</a>({ ...params }) -> EoobservationTupleResponse</code>

# Eop

Types:

- <code><a href="./src/resources/eop/eop.ts">EopAbridged</a></code>
- <code><a href="./src/resources/eop/eop.ts">EopListResponse</a></code>
- <code><a href="./src/resources/eop/eop.ts">EopCountResponse</a></code>

Methods:

- <code title="post /udl/eop">client.eop.<a href="./src/resources/eop/eop.ts">create</a>({ ...params }) -> void</code>
- <code title="get /udl/eop">client.eop.<a href="./src/resources/eop/eop.ts">list</a>({ ...params }) -> EopListResponse</code>
- <code title="get /udl/eop/count">client.eop.<a href="./src/resources/eop/eop.ts">count</a>({ ...params }) -> string</code>
- <code title="get /udl/eop/queryhelp">client.eop.<a href="./src/resources/eop/eop.ts">queryhelp</a>() -> void</code>

## History

Types:

- <code><a href="./src/resources/eop/history.ts">HistoryListResponse</a></code>
- <code><a href="./src/resources/eop/history.ts">HistoryCountResponse</a></code>

Methods:

- <code title="get /udl/eop/history">client.eop.history.<a href="./src/resources/eop/history.ts">list</a>({ ...params }) -> HistoryListResponse</code>
- <code title="get /udl/eop/history/aodr">client.eop.history.<a href="./src/resources/eop/history.ts">aodr</a>({ ...params }) -> void</code>
- <code title="get /udl/eop/history/count">client.eop.history.<a href="./src/resources/eop/history.ts">count</a>({ ...params }) -> string</code>

# Eops

Types:

- <code><a href="./src/resources/eops.ts">EopListResponse</a></code>

Methods:

- <code title="get /udl/eop/{id}">client.eops.<a href="./src/resources/eops.ts">retrieve</a>({ ...params }) -> EopFull</code>
- <code title="put /udl/eop/{id}">client.eops.<a href="./src/resources/eops.ts">update</a>({ ...params }) -> void</code>
- <code title="get /udl/eop/tuple">client.eops.<a href="./src/resources/eops.ts">list</a>({ ...params }) -> EopListResponse</code>
- <code title="delete /udl/eop/{id}">client.eops.<a href="./src/resources/eops.ts">delete</a>({ ...params }) -> void</code>

# EphemerisSets

Types:

- <code><a href="./src/resources/ephemeris-sets/ephemeris-sets.ts">EphemerisSet</a></code>
- <code><a href="./src/resources/ephemeris-sets/ephemeris-sets.ts">EphemerisSetAbridged</a></code>
- <code><a href="./src/resources/ephemeris-sets/ephemeris-sets.ts">EphemerisSetListResponse</a></code>
- <code><a href="./src/resources/ephemeris-sets/ephemeris-sets.ts">EphemerisSetCountResponse</a></code>
- <code><a href="./src/resources/ephemeris-sets/ephemeris-sets.ts">EphemerisSetTupleResponse</a></code>

Methods:

- <code title="post /udl/ephemerisset">client.ephemerisSets.<a href="./src/resources/ephemeris-sets/ephemeris-sets.ts">create</a>({ ...params }) -> void</code>
- <code title="get /udl/ephemerisset/{id}">client.ephemerisSets.<a href="./src/resources/ephemeris-sets/ephemeris-sets.ts">retrieve</a>({ ...params }) -> EphemerisSetFull</code>
- <code title="get /udl/ephemerisset">client.ephemerisSets.<a href="./src/resources/ephemeris-sets/ephemeris-sets.ts">list</a>({ ...params }) -> EphemerisSetListResponse</code>
- <code title="get /udl/ephemerisset/count">client.ephemerisSets.<a href="./src/resources/ephemeris-sets/ephemeris-sets.ts">count</a>({ ...params }) -> string</code>
- <code title="get /udl/ephemerisset/getFile/{id}">client.ephemerisSets.<a href="./src/resources/ephemeris-sets/ephemeris-sets.ts">fileRetrieve</a>({ ...params }) -> Response</code>
- <code title="get /udl/ephemerisset/queryhelp">client.ephemerisSets.<a href="./src/resources/ephemeris-sets/ephemeris-sets.ts">queryhelp</a>() -> void</code>
- <code title="get /udl/ephemerisset/tuple">client.ephemerisSets.<a href="./src/resources/ephemeris-sets/ephemeris-sets.ts">tuple</a>({ ...params }) -> EphemerisSetTupleResponse</code>

## History

Types:

- <code><a href="./src/resources/ephemeris-sets/history.ts">HistoryListResponse</a></code>
- <code><a href="./src/resources/ephemeris-sets/history.ts">HistoryCountResponse</a></code>

Methods:

- <code title="get /udl/ephemerisset/history">client.ephemerisSets.history.<a href="./src/resources/ephemeris-sets/history.ts">list</a>({ ...params }) -> HistoryListResponse</code>
- <code title="get /udl/ephemerisset/history/aodr">client.ephemerisSets.history.<a href="./src/resources/ephemeris-sets/history.ts">aodr</a>({ ...params }) -> void</code>
- <code title="get /udl/ephemerisset/history/count">client.ephemerisSets.history.<a href="./src/resources/ephemeris-sets/history.ts">count</a>({ ...params }) -> string</code>

# Equipment

Types:

- <code><a href="./src/resources/equipment.ts">EquipmentAbridged</a></code>
- <code><a href="./src/resources/equipment.ts">EquipmentFull</a></code>
- <code><a href="./src/resources/equipment.ts">EquipmentListResponse</a></code>
- <code><a href="./src/resources/equipment.ts">EquipmentCountResponse</a></code>
- <code><a href="./src/resources/equipment.ts">EquipmentTupleResponse</a></code>

Methods:

- <code title="post /udl/equipment">client.equipment.<a href="./src/resources/equipment.ts">create</a>({ ...params }) -> void</code>
- <code title="get /udl/equipment/{id}">client.equipment.<a href="./src/resources/equipment.ts">retrieve</a>({ ...params }) -> EquipmentFull</code>
- <code title="put /udl/equipment/{id}">client.equipment.<a href="./src/resources/equipment.ts">update</a>({ ...params }) -> void</code>
- <code title="get /udl/equipment">client.equipment.<a href="./src/resources/equipment.ts">list</a>() -> EquipmentListResponse</code>
- <code title="delete /udl/equipment/{id}">client.equipment.<a href="./src/resources/equipment.ts">delete</a>({ ...params }) -> void</code>
- <code title="get /udl/equipment/count">client.equipment.<a href="./src/resources/equipment.ts">count</a>() -> string</code>
- <code title="post /udl/equipment/createBulk">client.equipment.<a href="./src/resources/equipment.ts">createBulk</a>([ ...body ]) -> void</code>
- <code title="get /udl/equipment/queryhelp">client.equipment.<a href="./src/resources/equipment.ts">queryHelp</a>() -> void</code>
- <code title="get /udl/equipment/tuple">client.equipment.<a href="./src/resources/equipment.ts">tuple</a>({ ...params }) -> EquipmentTupleResponse</code>

# Equipmentremarks

Types:

- <code><a href="./src/resources/equipmentremarks.ts">EquipmentRemarkAbridged</a></code>
- <code><a href="./src/resources/equipmentremarks.ts">EquipmentRemarkFull</a></code>
- <code><a href="./src/resources/equipmentremarks.ts">EquipmentremarkListResponse</a></code>
- <code><a href="./src/resources/equipmentremarks.ts">EquipmentremarkCountResponse</a></code>
- <code><a href="./src/resources/equipmentremarks.ts">EquipmentremarkTupleResponse</a></code>

Methods:

- <code title="post /udl/equipmentremark">client.equipmentremarks.<a href="./src/resources/equipmentremarks.ts">create</a>({ ...params }) -> void</code>
- <code title="get /udl/equipmentremark/{id}">client.equipmentremarks.<a href="./src/resources/equipmentremarks.ts">retrieve</a>({ ...params }) -> EquipmentRemarkFull</code>
- <code title="get /udl/equipmentremark">client.equipmentremarks.<a href="./src/resources/equipmentremarks.ts">list</a>() -> EquipmentremarkListResponse</code>
- <code title="get /udl/equipmentremark/count">client.equipmentremarks.<a href="./src/resources/equipmentremarks.ts">count</a>() -> string</code>
- <code title="post /udl/equipmentremark/createBulk">client.equipmentremarks.<a href="./src/resources/equipmentremarks.ts">createBulk</a>([ ...body ]) -> void</code>
- <code title="get /udl/equipmentremark/queryhelp">client.equipmentremarks.<a href="./src/resources/equipmentremarks.ts">queryHelp</a>() -> void</code>
- <code title="get /udl/equipmentremark/tuple">client.equipmentremarks.<a href="./src/resources/equipmentremarks.ts">tuple</a>({ ...params }) -> EquipmentremarkTupleResponse</code>

# Evac

Types:

- <code><a href="./src/resources/evac/evac.ts">EvacAbridged</a></code>
- <code><a href="./src/resources/evac/evac.ts">EvacListResponse</a></code>
- <code><a href="./src/resources/evac/evac.ts">EvacCountResponse</a></code>

Methods:

- <code title="post /udl/evac">client.evac.<a href="./src/resources/evac/evac.ts">create</a>({ ...params }) -> void</code>
- <code title="get /udl/evac/{id}">client.evac.<a href="./src/resources/evac/evac.ts">retrieve</a>({ ...params }) -> EvacFull</code>
- <code title="get /udl/evac">client.evac.<a href="./src/resources/evac/evac.ts">list</a>({ ...params }) -> EvacListResponse</code>
- <code title="get /udl/evac/count">client.evac.<a href="./src/resources/evac/evac.ts">count</a>({ ...params }) -> string</code>
- <code title="post /udl/evac/createBulk">client.evac.<a href="./src/resources/evac/evac.ts">createBulk</a>([ ...body ]) -> void</code>
- <code title="get /udl/evac/queryhelp">client.evac.<a href="./src/resources/evac/evac.ts">queryHelp</a>() -> void</code>

## History

Types:

- <code><a href="./src/resources/evac/history.ts">HistoryListResponse</a></code>
- <code><a href="./src/resources/evac/history.ts">HistoryCountResponse</a></code>

Methods:

- <code title="get /udl/evac/history">client.evac.history.<a href="./src/resources/evac/history.ts">list</a>({ ...params }) -> HistoryListResponse</code>
- <code title="get /udl/evac/history/count">client.evac.history.<a href="./src/resources/evac/history.ts">count</a>({ ...params }) -> string</code>

## Tuple

Types:

- <code><a href="./src/resources/evac/tuple.ts">TupleListResponse</a></code>

Methods:

- <code title="get /udl/evac/tuple">client.evac.tuple.<a href="./src/resources/evac/tuple.ts">list</a>({ ...params }) -> TupleListResponse</code>

# EventEvolution

Types:

- <code><a href="./src/resources/event-evolution.ts">EventEvolutionListResponse</a></code>
- <code><a href="./src/resources/event-evolution.ts">EventEvolutionCountResponse</a></code>

Methods:

- <code title="post /udl/eventevolution">client.eventEvolution.<a href="./src/resources/event-evolution.ts">create</a>({ ...params }) -> void</code>
- <code title="get /udl/eventevolution">client.eventEvolution.<a href="./src/resources/event-evolution.ts">list</a>({ ...params }) -> EventEvolutionListResponse</code>
- <code title="get /udl/eventevolution/count">client.eventEvolution.<a href="./src/resources/event-evolution.ts">count</a>({ ...params }) -> string</code>
- <code title="post /udl/eventevolution/createBulk">client.eventEvolution.<a href="./src/resources/event-evolution.ts">createBulk</a>([ ...body ]) -> void</code>

# Eventevolutions

Types:

- <code><a href="./src/resources/eventevolutions/eventevolutions.ts">EventEvolutionAbridged</a></code>
- <code><a href="./src/resources/eventevolutions/eventevolutions.ts">EventevolutionTupleResponse</a></code>

Methods:

- <code title="get /udl/eventevolution/{id}">client.eventevolutions.<a href="./src/resources/eventevolutions/eventevolutions.ts">retrieve</a>({ ...params }) -> EventEvolutionFull</code>
- <code title="get /udl/eventevolution/queryhelp">client.eventevolutions.<a href="./src/resources/eventevolutions/eventevolutions.ts">queryhelp</a>() -> void</code>
- <code title="get /udl/eventevolution/tuple">client.eventevolutions.<a href="./src/resources/eventevolutions/eventevolutions.ts">tuple</a>({ ...params }) -> EventevolutionTupleResponse</code>

## History

Types:

- <code><a href="./src/resources/eventevolutions/history.ts">HistoryListResponse</a></code>
- <code><a href="./src/resources/eventevolutions/history.ts">HistoryCountResponse</a></code>

Methods:

- <code title="get /udl/eventevolution/history">client.eventevolutions.history.<a href="./src/resources/eventevolutions/history.ts">list</a>({ ...params }) -> HistoryListResponse</code>
- <code title="get /udl/eventevolution/history/aodr">client.eventevolutions.history.<a href="./src/resources/eventevolutions/history.ts">aodr</a>({ ...params }) -> void</code>
- <code title="get /udl/eventevolution/history/count">client.eventevolutions.history.<a href="./src/resources/eventevolutions/history.ts">count</a>({ ...params }) -> string</code>

# Flightplans

Types:

- <code><a href="./src/resources/flightplans/flightplans.ts">FlightPlanAbridged</a></code>
- <code><a href="./src/resources/flightplans/flightplans.ts">FlightplanListResponse</a></code>
- <code><a href="./src/resources/flightplans/flightplans.ts">FlightplanCountResponse</a></code>

Methods:

- <code title="post /udl/flightplan">client.flightplans.<a href="./src/resources/flightplans/flightplans.ts">create</a>({ ...params }) -> void</code>
- <code title="get /udl/flightplan">client.flightplans.<a href="./src/resources/flightplans/flightplans.ts">list</a>() -> FlightplanListResponse</code>
- <code title="get /udl/flightplan/count">client.flightplans.<a href="./src/resources/flightplans/flightplans.ts">count</a>() -> string</code>

## History

Types:

- <code><a href="./src/resources/flightplans/history.ts">HistoryListResponse</a></code>

Methods:

- <code title="get /udl/flightplan/history">client.flightplans.history.<a href="./src/resources/flightplans/history.ts">list</a>({ ...params }) -> HistoryListResponse</code>
