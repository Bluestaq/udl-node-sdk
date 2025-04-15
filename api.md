# Shared

Types:

- <code><a href="./src/resources/shared.ts">AirTransportMissionFull</a></code>
- <code><a href="./src/resources/shared.ts">AircraftstatusFull</a></code>
- <code><a href="./src/resources/shared.ts">AIsFull</a></code>
- <code><a href="./src/resources/shared.ts">AttitudesetFull</a></code>
- <code><a href="./src/resources/shared.ts">CollectRequestFull</a></code>
- <code><a href="./src/resources/shared.ts">CollectResponseFull</a></code>
- <code><a href="./src/resources/shared.ts">DriftHistory</a></code>
- <code><a href="./src/resources/shared.ts">DrifthistoryAbridged</a></code>
- <code><a href="./src/resources/shared.ts">EopFull</a></code>
- <code><a href="./src/resources/shared.ts">EphemerisFull</a></code>
- <code><a href="./src/resources/shared.ts">EvacFull</a></code>
- <code><a href="./src/resources/shared.ts">EventEvolutionFull</a></code>
- <code><a href="./src/resources/shared.ts">FileData</a></code>
- <code><a href="./src/resources/shared.ts">FlightPlanFull</a></code>
- <code><a href="./src/resources/shared.ts">Onorbit</a></code>

# AirEvents

Types:

- <code><a href="./src/resources/air-events.ts">AirEventListResponse</a></code>
- <code><a href="./src/resources/air-events.ts">AirEventCountResponse</a></code>
- <code><a href="./src/resources/air-events.ts">AirEventGetResponse</a></code>
- <code><a href="./src/resources/air-events.ts">AirEventTupleResponse</a></code>

Methods:

- <code title="post /udl/airevent">client.airEvents.<a href="./src/resources/air-events.ts">create</a>({ ...params }) -> void</code>
- <code title="put /udl/airevent/{id}">client.airEvents.<a href="./src/resources/air-events.ts">update</a>(pathId, { ...params }) -> void</code>
- <code title="get /udl/airevent">client.airEvents.<a href="./src/resources/air-events.ts">list</a>() -> AirEventListResponse</code>
- <code title="delete /udl/airevent/{id}">client.airEvents.<a href="./src/resources/air-events.ts">delete</a>(id) -> void</code>
- <code title="get /udl/airevent/count">client.airEvents.<a href="./src/resources/air-events.ts">count</a>() -> string</code>
- <code title="post /udl/airevent/createBulk">client.airEvents.<a href="./src/resources/air-events.ts">createBulk</a>([ ...body ]) -> void</code>
- <code title="post /filedrop/udl-airevent">client.airEvents.<a href="./src/resources/air-events.ts">createBulkV2</a>([ ...body ]) -> void</code>
- <code title="get /udl/airevent/{id}">client.airEvents.<a href="./src/resources/air-events.ts">get</a>(id) -> AirEventGetResponse</code>
- <code title="get /udl/airevent/queryhelp">client.airEvents.<a href="./src/resources/air-events.ts">queryhelp</a>() -> void</code>
- <code title="get /udl/airevent/tuple">client.airEvents.<a href="./src/resources/air-events.ts">tuple</a>({ ...params }) -> AirEventTupleResponse</code>

# AirLoadPlans

Types:

- <code><a href="./src/resources/air-load-plans.ts">AirloadplanAbridged</a></code>
- <code><a href="./src/resources/air-load-plans.ts">AirloadplanFull</a></code>
- <code><a href="./src/resources/air-load-plans.ts">AirLoadPlanListResponse</a></code>
- <code><a href="./src/resources/air-load-plans.ts">AirLoadPlanCountResponse</a></code>
- <code><a href="./src/resources/air-load-plans.ts">AirLoadPlanTupleResponse</a></code>

Methods:

- <code title="post /udl/airloadplan">client.airLoadPlans.<a href="./src/resources/air-load-plans.ts">create</a>({ ...params }) -> void</code>
- <code title="get /udl/airloadplan/{id}">client.airLoadPlans.<a href="./src/resources/air-load-plans.ts">retrieve</a>(id) -> AirloadplanFull</code>
- <code title="get /udl/airloadplan">client.airLoadPlans.<a href="./src/resources/air-load-plans.ts">list</a>({ ...params }) -> AirLoadPlanListResponse</code>
- <code title="get /udl/airloadplan/count">client.airLoadPlans.<a href="./src/resources/air-load-plans.ts">count</a>({ ...params }) -> string</code>
- <code title="get /udl/airloadplan/queryhelp">client.airLoadPlans.<a href="./src/resources/air-load-plans.ts">queryhelp</a>() -> void</code>
- <code title="get /udl/airloadplan/tuple">client.airLoadPlans.<a href="./src/resources/air-load-plans.ts">tuple</a>({ ...params }) -> AirLoadPlanTupleResponse</code>

# AirOperations

## AirTaskingOrders

Methods:

- <code title="post /filedrop/udl-airtaskingorder">client.airOperations.airTaskingOrders.<a href="./src/resources/air-operations/air-tasking-orders.ts">createBulkV2</a>([ ...body ]) -> void</code>

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

## AircraftSorties

Methods:

- <code title="post /filedrop/udl-aircraftsortie">client.airOperations.aircraftSorties.<a href="./src/resources/air-operations/aircraft-sorties.ts">createBulkV2</a>([ ...body ]) -> void</code>

## AirspaceControlOrders

Methods:

- <code title="post /filedrop/udl-airspacecontrolorder">client.airOperations.airspaceControlOrders.<a href="./src/resources/air-operations/airspace-control-orders.ts">createBulkV2</a>([ ...body ]) -> void</code>

## Crewpapers

Methods:

- <code title="post /udl/crewpapers/unpublish">client.airOperations.crewpapers.<a href="./src/resources/air-operations/crewpapers.ts">unpublish</a>({ ...params }) -> void</code>
- <code title="post /filedrop/crewpapers">client.airOperations.crewpapers.<a href="./src/resources/air-operations/crewpapers.ts">uploadPdf</a>({ ...params }) -> void</code>

## DiplomaticClearance

Types:

- <code><a href="./src/resources/air-operations/diplomatic-clearance.ts">DiplomaticclearanceAbridged</a></code>
- <code><a href="./src/resources/air-operations/diplomatic-clearance.ts">DiplomaticclearanceFull</a></code>

Methods:

- <code title="post /filedrop/udl-diplomaticclearance">client.airOperations.diplomaticClearance.<a href="./src/resources/air-operations/diplomatic-clearance.ts">createBulkV2</a>([ ...body ]) -> void</code>

# AirTaskingOrders

Types:

- <code><a href="./src/resources/air-tasking-orders.ts">AirTaskingOrderFull</a></code>
- <code><a href="./src/resources/air-tasking-orders.ts">AirTaskingOrderCountResponse</a></code>
- <code><a href="./src/resources/air-tasking-orders.ts">AirTaskingOrderTupleResponse</a></code>

Methods:

- <code title="post /udl/airtaskingorder">client.airTaskingOrders.<a href="./src/resources/air-tasking-orders.ts">create</a>({ ...params }) -> void</code>
- <code title="get /udl/airtaskingorder/{id}">client.airTaskingOrders.<a href="./src/resources/air-tasking-orders.ts">retrieve</a>(id) -> AirTaskingOrderFull</code>
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
- <code title="get /udl/airtransportmission/{id}">client.airTransportMissions.<a href="./src/resources/air-transport-missions/air-transport-missions.ts">retrieve</a>(id) -> AirTransportMissionFull</code>
- <code title="put /udl/airtransportmission/{id}">client.airTransportMissions.<a href="./src/resources/air-transport-missions/air-transport-missions.ts">update</a>(pathId, { ...params }) -> void</code>
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

# Aircraft

Types:

- <code><a href="./src/resources/aircraft.ts">AircraftAbridged</a></code>
- <code><a href="./src/resources/aircraft.ts">AircraftFull</a></code>
- <code><a href="./src/resources/aircraft.ts">AircraftListResponse</a></code>
- <code><a href="./src/resources/aircraft.ts">AircraftCountResponse</a></code>
- <code><a href="./src/resources/aircraft.ts">AircraftTupleQueryResponse</a></code>

Methods:

- <code title="post /udl/aircraft">client.aircraft.<a href="./src/resources/aircraft.ts">create</a>({ ...params }) -> void</code>
- <code title="get /udl/aircraft/{id}">client.aircraft.<a href="./src/resources/aircraft.ts">retrieve</a>(id) -> AircraftFull</code>
- <code title="put /udl/aircraft/{id}">client.aircraft.<a href="./src/resources/aircraft.ts">update</a>(pathId, { ...params }) -> void</code>
- <code title="get /udl/aircraft">client.aircraft.<a href="./src/resources/aircraft.ts">list</a>() -> AircraftListResponse</code>
- <code title="get /udl/aircraft/count">client.aircraft.<a href="./src/resources/aircraft.ts">count</a>() -> string</code>
- <code title="get /udl/aircraft/queryhelp">client.aircraft.<a href="./src/resources/aircraft.ts">queryhelp</a>() -> void</code>
- <code title="get /udl/aircraft/tuple">client.aircraft.<a href="./src/resources/aircraft.ts">tupleQuery</a>({ ...params }) -> AircraftTupleQueryResponse</code>

# AircraftSorties

Types:

- <code><a href="./src/resources/aircraft-sorties.ts">AircraftSortyTupleResponse</a></code>

Methods:

- <code title="get /udl/aircraftsortie/{id}">client.aircraftSorties.<a href="./src/resources/aircraft-sorties.ts">retrieve</a>(id) -> AircraftsortieFull</code>
- <code title="put /udl/aircraftsortie/{id}">client.aircraftSorties.<a href="./src/resources/aircraft-sorties.ts">update</a>(pathId, { ...params }) -> void</code>
- <code title="get /udl/aircraftsortie/queryhelp">client.aircraftSorties.<a href="./src/resources/aircraft-sorties.ts">queryhelp</a>() -> void</code>
- <code title="get /udl/aircraftsortie/tuple">client.aircraftSorties.<a href="./src/resources/aircraft-sorties.ts">tuple</a>({ ...params }) -> AircraftSortyTupleResponse</code>

# AircraftStatusRemarks

Types:

- <code><a href="./src/resources/aircraft-status-remarks.ts">AircraftstatusremarkAbridged</a></code>
- <code><a href="./src/resources/aircraft-status-remarks.ts">AircraftstatusremarkFull</a></code>
- <code><a href="./src/resources/aircraft-status-remarks.ts">AircraftStatusRemarkListResponse</a></code>
- <code><a href="./src/resources/aircraft-status-remarks.ts">AircraftStatusRemarkCountResponse</a></code>
- <code><a href="./src/resources/aircraft-status-remarks.ts">AircraftStatusRemarkTupleResponse</a></code>

Methods:

- <code title="post /udl/aircraftstatusremark">client.aircraftStatusRemarks.<a href="./src/resources/aircraft-status-remarks.ts">create</a>({ ...params }) -> void</code>
- <code title="get /udl/aircraftstatusremark/{id}">client.aircraftStatusRemarks.<a href="./src/resources/aircraft-status-remarks.ts">retrieve</a>(id) -> AircraftstatusremarkFull</code>
- <code title="get /udl/aircraftstatusremark">client.aircraftStatusRemarks.<a href="./src/resources/aircraft-status-remarks.ts">list</a>() -> AircraftStatusRemarkListResponse</code>
- <code title="get /udl/aircraftstatusremark/count">client.aircraftStatusRemarks.<a href="./src/resources/aircraft-status-remarks.ts">count</a>() -> string</code>
- <code title="get /udl/aircraftstatusremark/queryhelp">client.aircraftStatusRemarks.<a href="./src/resources/aircraft-status-remarks.ts">queryhelp</a>() -> void</code>
- <code title="get /udl/aircraftstatusremark/tuple">client.aircraftStatusRemarks.<a href="./src/resources/aircraft-status-remarks.ts">tuple</a>({ ...params }) -> AircraftStatusRemarkTupleResponse</code>

# AircraftStatuses

Types:

- <code><a href="./src/resources/aircraft-statuses/aircraft-statuses.ts">AircraftstatusAbridged</a></code>
- <code><a href="./src/resources/aircraft-statuses/aircraft-statuses.ts">AircraftStatusListResponse</a></code>
- <code><a href="./src/resources/aircraft-statuses/aircraft-statuses.ts">AircraftStatusCountResponse</a></code>
- <code><a href="./src/resources/aircraft-statuses/aircraft-statuses.ts">AircraftStatusTupleResponse</a></code>

Methods:

- <code title="post /udl/aircraftstatus">client.aircraftStatuses.<a href="./src/resources/aircraft-statuses/aircraft-statuses.ts">create</a>({ ...params }) -> void</code>
- <code title="get /udl/aircraftstatus/{id}">client.aircraftStatuses.<a href="./src/resources/aircraft-statuses/aircraft-statuses.ts">retrieve</a>(id) -> AircraftstatusFull</code>
- <code title="put /udl/aircraftstatus/{id}">client.aircraftStatuses.<a href="./src/resources/aircraft-statuses/aircraft-statuses.ts">update</a>(pathId, { ...params }) -> void</code>
- <code title="get /udl/aircraftstatus">client.aircraftStatuses.<a href="./src/resources/aircraft-statuses/aircraft-statuses.ts">list</a>() -> AircraftStatusListResponse</code>
- <code title="delete /udl/aircraftstatus/{id}">client.aircraftStatuses.<a href="./src/resources/aircraft-statuses/aircraft-statuses.ts">delete</a>(id) -> void</code>
- <code title="get /udl/aircraftstatus/count">client.aircraftStatuses.<a href="./src/resources/aircraft-statuses/aircraft-statuses.ts">count</a>() -> string</code>
- <code title="get /udl/aircraftstatus/queryhelp">client.aircraftStatuses.<a href="./src/resources/aircraft-statuses/aircraft-statuses.ts">queryhelp</a>() -> void</code>
- <code title="get /udl/aircraftstatus/tuple">client.aircraftStatuses.<a href="./src/resources/aircraft-statuses/aircraft-statuses.ts">tuple</a>({ ...params }) -> AircraftStatusTupleResponse</code>

## History

Types:

- <code><a href="./src/resources/aircraft-statuses/history.ts">HistoryListResponse</a></code>
- <code><a href="./src/resources/aircraft-statuses/history.ts">HistoryCountResponse</a></code>

Methods:

- <code title="get /udl/aircraftstatus/history">client.aircraftStatuses.history.<a href="./src/resources/aircraft-statuses/history.ts">list</a>({ ...params }) -> HistoryListResponse</code>
- <code title="get /udl/aircraftstatus/history/count">client.aircraftStatuses.history.<a href="./src/resources/aircraft-statuses/history.ts">count</a>() -> string</code>

# Aircraftstatusremark

Methods:

- <code title="put /udl/aircraftstatusremark/{id}">client.aircraftstatusremark.<a href="./src/resources/aircraftstatusremark.ts">update</a>(pathId, { ...params }) -> void</code>
- <code title="delete /udl/aircraftstatusremark/{id}">client.aircraftstatusremark.<a href="./src/resources/aircraftstatusremark.ts">delete</a>(id) -> void</code>

# AirfieldSlots

Types:

- <code><a href="./src/resources/airfield-slots.ts">AirfieldslotAbridged</a></code>
- <code><a href="./src/resources/airfield-slots.ts">AirfieldslotFull</a></code>
- <code><a href="./src/resources/airfield-slots.ts">AirfieldSlotListResponse</a></code>

Methods:

- <code title="post /udl/airfieldslot">client.airfieldSlots.<a href="./src/resources/airfield-slots.ts">create</a>({ ...params }) -> void</code>
- <code title="get /udl/airfieldslot">client.airfieldSlots.<a href="./src/resources/airfield-slots.ts">list</a>() -> AirfieldSlotListResponse</code>

# AirfieldStatus

Types:

- <code><a href="./src/resources/airfield-status.ts">AirfieldStatusTupleResponse</a></code>

Methods:

- <code title="get /udl/airfieldstatus/{id}">client.airfieldStatus.<a href="./src/resources/airfield-status.ts">retrieve</a>(id) -> AirfieldstatusFull</code>
- <code title="put /udl/airfieldstatus/{id}">client.airfieldStatus.<a href="./src/resources/airfield-status.ts">update</a>(pathId, { ...params }) -> void</code>
- <code title="delete /udl/airfieldstatus/{id}">client.airfieldStatus.<a href="./src/resources/airfield-status.ts">delete</a>(id) -> void</code>
- <code title="get /udl/airfieldstatus/tuple">client.airfieldStatus.<a href="./src/resources/airfield-status.ts">tuple</a>({ ...params }) -> AirfieldStatusTupleResponse</code>

# Airfields

Types:

- <code><a href="./src/resources/airfields.ts">AirfieldAbridged</a></code>
- <code><a href="./src/resources/airfields.ts">AirfieldFull</a></code>
- <code><a href="./src/resources/airfields.ts">AirfieldListResponse</a></code>
- <code><a href="./src/resources/airfields.ts">AirfieldCountResponse</a></code>
- <code><a href="./src/resources/airfields.ts">AirfieldTupleResponse</a></code>

Methods:

- <code title="post /udl/airfield">client.airfields.<a href="./src/resources/airfields.ts">create</a>({ ...params }) -> void</code>
- <code title="get /udl/airfield/{id}">client.airfields.<a href="./src/resources/airfields.ts">retrieve</a>(id) -> AirfieldFull</code>
- <code title="put /udl/airfield/{id}">client.airfields.<a href="./src/resources/airfields.ts">update</a>(pathId, { ...params }) -> void</code>
- <code title="get /udl/airfield">client.airfields.<a href="./src/resources/airfields.ts">list</a>() -> AirfieldListResponse</code>
- <code title="get /udl/airfield/count">client.airfields.<a href="./src/resources/airfields.ts">count</a>() -> string</code>
- <code title="get /udl/airfield/queryhelp">client.airfields.<a href="./src/resources/airfields.ts">queryhelp</a>() -> void</code>
- <code title="get /udl/airfield/tuple">client.airfields.<a href="./src/resources/airfields.ts">tuple</a>({ ...params }) -> AirfieldTupleResponse</code>

# Airfieldslotconsumptions

Types:

- <code><a href="./src/resources/airfieldslotconsumptions.ts">AirfieldslotconsumptionAbridged</a></code>
- <code><a href="./src/resources/airfieldslotconsumptions.ts">AirfieldslotconsumptionFull</a></code>
- <code><a href="./src/resources/airfieldslotconsumptions.ts">AirfieldslotconsumptionListResponse</a></code>
- <code><a href="./src/resources/airfieldslotconsumptions.ts">AirfieldslotconsumptionCountResponse</a></code>
- <code><a href="./src/resources/airfieldslotconsumptions.ts">AirfieldslotconsumptionTupleResponse</a></code>

Methods:

- <code title="post /udl/airfieldslotconsumption">client.airfieldslotconsumptions.<a href="./src/resources/airfieldslotconsumptions.ts">create</a>({ ...params }) -> void</code>
- <code title="get /udl/airfieldslotconsumption/{id}">client.airfieldslotconsumptions.<a href="./src/resources/airfieldslotconsumptions.ts">retrieve</a>(id) -> AirfieldslotconsumptionFull</code>
- <code title="put /udl/airfieldslotconsumption/{id}">client.airfieldslotconsumptions.<a href="./src/resources/airfieldslotconsumptions.ts">update</a>(pathId, { ...params }) -> void</code>
- <code title="get /udl/airfieldslotconsumption">client.airfieldslotconsumptions.<a href="./src/resources/airfieldslotconsumptions.ts">list</a>({ ...params }) -> AirfieldslotconsumptionListResponse</code>
- <code title="delete /udl/airfieldslotconsumption/{id}">client.airfieldslotconsumptions.<a href="./src/resources/airfieldslotconsumptions.ts">delete</a>(id) -> void</code>
- <code title="get /udl/airfieldslotconsumption/count">client.airfieldslotconsumptions.<a href="./src/resources/airfieldslotconsumptions.ts">count</a>({ ...params }) -> string</code>
- <code title="get /udl/airfieldslotconsumption/queryhelp">client.airfieldslotconsumptions.<a href="./src/resources/airfieldslotconsumptions.ts">queryhelp</a>() -> void</code>
- <code title="get /udl/airfieldslotconsumption/tuple">client.airfieldslotconsumptions.<a href="./src/resources/airfieldslotconsumptions.ts">tuple</a>({ ...params }) -> AirfieldslotconsumptionTupleResponse</code>

# Airfieldslots

Types:

- <code><a href="./src/resources/airfieldslots.ts">AirfieldslotCountResponse</a></code>
- <code><a href="./src/resources/airfieldslots.ts">AirfieldslotTupleResponse</a></code>

Methods:

- <code title="get /udl/airfieldslot/{id}">client.airfieldslots.<a href="./src/resources/airfieldslots.ts">retrieve</a>(id) -> AirfieldslotFull</code>
- <code title="put /udl/airfieldslot/{id}">client.airfieldslots.<a href="./src/resources/airfieldslots.ts">update</a>(pathId, { ...params }) -> void</code>
- <code title="delete /udl/airfieldslot/{id}">client.airfieldslots.<a href="./src/resources/airfieldslots.ts">delete</a>(id) -> void</code>
- <code title="get /udl/airfieldslot/count">client.airfieldslots.<a href="./src/resources/airfieldslots.ts">count</a>() -> string</code>
- <code title="get /udl/airfieldslot/queryhelp">client.airfieldslots.<a href="./src/resources/airfieldslots.ts">queryhelp</a>() -> void</code>
- <code title="get /udl/airfieldslot/tuple">client.airfieldslots.<a href="./src/resources/airfieldslots.ts">tuple</a>({ ...params }) -> AirfieldslotTupleResponse</code>

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

# Airloadplans

Methods:

- <code title="put /udl/airloadplan/{id}">client.airloadplans.<a href="./src/resources/airloadplans.ts">update</a>(pathId, { ...params }) -> void</code>
- <code title="delete /udl/airloadplan/{id}">client.airloadplans.<a href="./src/resources/airloadplans.ts">delete</a>(id) -> void</code>

# AirspaceControlOrders

Types:

- <code><a href="./src/resources/airspace-control-orders.ts">AirspacecontrolorderAbridged</a></code>
- <code><a href="./src/resources/airspace-control-orders.ts">AirspacecontrolorderFull</a></code>
- <code><a href="./src/resources/airspace-control-orders.ts">AirspaceControlOrderListResponse</a></code>
- <code><a href="./src/resources/airspace-control-orders.ts">AirspaceControlOrderCountResponse</a></code>
- <code><a href="./src/resources/airspace-control-orders.ts">AirspaceControlOrderTupleResponse</a></code>

Methods:

- <code title="post /udl/airspacecontrolorder">client.airspaceControlOrders.<a href="./src/resources/airspace-control-orders.ts">create</a>({ ...params }) -> void</code>
- <code title="get /udl/airspacecontrolorder/{id}">client.airspaceControlOrders.<a href="./src/resources/airspace-control-orders.ts">retrieve</a>(id) -> AirspacecontrolorderFull</code>
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

# AIsObjects

Methods:

- <code title="post /filedrop/udl-ais">client.aisObjects.<a href="./src/resources/ais-objects.ts">createBulkV2</a>([ ...body ]) -> void</code>

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

- <code title="get /udl/analyticimagery/{id}">client.analyticImagery.<a href="./src/resources/analytic-imagery.ts">retrieve</a>(id) -> AnalyticImageryFull</code>
- <code title="get /udl/analyticimagery">client.analyticImagery.<a href="./src/resources/analytic-imagery.ts">list</a>({ ...params }) -> AnalyticImageryListResponse</code>
- <code title="get /udl/analyticimagery/count">client.analyticImagery.<a href="./src/resources/analytic-imagery.ts">count</a>({ ...params }) -> string</code>
- <code title="post /filedrop/udl-analyticimagery">client.analyticImagery.<a href="./src/resources/analytic-imagery.ts">createBulkV2</a>({ ...params }) -> void</code>
- <code title="get /udl/analyticimagery/getFile/{id}">client.analyticImagery.<a href="./src/resources/analytic-imagery.ts">fileGet</a>(id) -> Response</code>
- <code title="get /udl/analyticimagery/history">client.analyticImagery.<a href="./src/resources/analytic-imagery.ts">history</a>({ ...params }) -> AnalyticImageryHistoryResponse</code>
- <code title="get /udl/analyticimagery/history/aodr">client.analyticImagery.<a href="./src/resources/analytic-imagery.ts">historyAodr</a>({ ...params }) -> void</code>
- <code title="get /udl/analyticimagery/history/count">client.analyticImagery.<a href="./src/resources/analytic-imagery.ts">historyCount</a>({ ...params }) -> string</code>
- <code title="get /udl/analyticimagery/queryhelp">client.analyticImagery.<a href="./src/resources/analytic-imagery.ts">queryhelp</a>() -> void</code>
- <code title="get /udl/analyticimagery/tuple">client.analyticImagery.<a href="./src/resources/analytic-imagery.ts">tuple</a>({ ...params }) -> AnalyticImageryTupleResponse</code>

# Antennas

Types:

- <code><a href="./src/resources/antennas.ts">AntennaAbridged</a></code>
- <code><a href="./src/resources/antennas.ts">AntennaFull</a></code>
- <code><a href="./src/resources/antennas.ts">AntennaListResponse</a></code>
- <code><a href="./src/resources/antennas.ts">AntennaCountResponse</a></code>
- <code><a href="./src/resources/antennas.ts">AntennaTupleResponse</a></code>

Methods:

- <code title="post /udl/antenna">client.antennas.<a href="./src/resources/antennas.ts">create</a>({ ...params }) -> void</code>
- <code title="get /udl/antenna/{id}">client.antennas.<a href="./src/resources/antennas.ts">retrieve</a>(id) -> AntennaFull</code>
- <code title="put /udl/antenna/{id}">client.antennas.<a href="./src/resources/antennas.ts">update</a>(pathId, { ...params }) -> void</code>
- <code title="get /udl/antenna">client.antennas.<a href="./src/resources/antennas.ts">list</a>() -> AntennaListResponse</code>
- <code title="delete /udl/antenna/{id}">client.antennas.<a href="./src/resources/antennas.ts">delete</a>(id) -> void</code>
- <code title="get /udl/antenna/count">client.antennas.<a href="./src/resources/antennas.ts">count</a>() -> string</code>
- <code title="get /udl/antenna/queryhelp">client.antennas.<a href="./src/resources/antennas.ts">queryhelp</a>() -> void</code>
- <code title="get /udl/antenna/tuple">client.antennas.<a href="./src/resources/antennas.ts">tuple</a>({ ...params }) -> AntennaTupleResponse</code>

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
- <code title="post /filedrop/udl-attitudeset">client.attitudeSets.<a href="./src/resources/attitude-sets/attitude-sets.ts">createBulkV2</a>({ ...params }) -> void</code>
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

- <code title="get /udl/attitudeset/{id}">client.attitudesets.<a href="./src/resources/attitudesets.ts">retrieve</a>(id) -> AttitudesetFull</code>

# Batteries

Types:

- <code><a href="./src/resources/batteries.ts">BatteryAbridged</a></code>
- <code><a href="./src/resources/batteries.ts">BatteryFull</a></code>
- <code><a href="./src/resources/batteries.ts">BatteryListResponse</a></code>
- <code><a href="./src/resources/batteries.ts">BatteryCountResponse</a></code>
- <code><a href="./src/resources/batteries.ts">BatteryTupleResponse</a></code>

Methods:

- <code title="post /udl/battery">client.batteries.<a href="./src/resources/batteries.ts">create</a>({ ...params }) -> void</code>
- <code title="get /udl/battery/{id}">client.batteries.<a href="./src/resources/batteries.ts">retrieve</a>(id) -> BatteryFull</code>
- <code title="put /udl/battery/{id}">client.batteries.<a href="./src/resources/batteries.ts">update</a>(pathId, { ...params }) -> void</code>
- <code title="get /udl/battery">client.batteries.<a href="./src/resources/batteries.ts">list</a>() -> BatteryListResponse</code>
- <code title="delete /udl/battery/{id}">client.batteries.<a href="./src/resources/batteries.ts">delete</a>(id) -> void</code>
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
- <code title="get /udl/batterydetails/{id}">client.batterydetails.<a href="./src/resources/batterydetails.ts">retrieve</a>(id) -> BatterydetailsFull</code>
- <code title="put /udl/batterydetails/{id}">client.batterydetails.<a href="./src/resources/batterydetails.ts">update</a>(pathId, { ...params }) -> void</code>
- <code title="get /udl/batterydetails">client.batterydetails.<a href="./src/resources/batterydetails.ts">list</a>() -> BatterydetailListResponse</code>
- <code title="delete /udl/batterydetails/{id}">client.batterydetails.<a href="./src/resources/batterydetails.ts">delete</a>(id) -> void</code>

# Beam

Types:

- <code><a href="./src/resources/beam.ts">BeamAbridged</a></code>
- <code><a href="./src/resources/beam.ts">BeamFull</a></code>
- <code><a href="./src/resources/beam.ts">BeamListResponse</a></code>
- <code><a href="./src/resources/beam.ts">BeamCountResponse</a></code>
- <code><a href="./src/resources/beam.ts">BeamTupleResponse</a></code>

Methods:

- <code title="post /udl/beam">client.beam.<a href="./src/resources/beam.ts">create</a>({ ...params }) -> void</code>
- <code title="get /udl/beam/{id}">client.beam.<a href="./src/resources/beam.ts">retrieve</a>(id) -> BeamFull</code>
- <code title="put /udl/beam/{id}">client.beam.<a href="./src/resources/beam.ts">update</a>(pathId, { ...params }) -> void</code>
- <code title="get /udl/beam">client.beam.<a href="./src/resources/beam.ts">list</a>() -> BeamListResponse</code>
- <code title="delete /udl/beam/{id}">client.beam.<a href="./src/resources/beam.ts">delete</a>(id) -> void</code>
- <code title="get /udl/beam/count">client.beam.<a href="./src/resources/beam.ts">count</a>() -> string</code>
- <code title="get /udl/beam/queryhelp">client.beam.<a href="./src/resources/beam.ts">queryHelp</a>() -> void</code>
- <code title="get /udl/beam/tuple">client.beam.<a href="./src/resources/beam.ts">tuple</a>({ ...params }) -> BeamTupleResponse</code>

# BeamContours

Types:

- <code><a href="./src/resources/beam-contours.ts">BeamcontourAbridged</a></code>
- <code><a href="./src/resources/beam-contours.ts">BeamcontourFull</a></code>
- <code><a href="./src/resources/beam-contours.ts">BeamContourListResponse</a></code>
- <code><a href="./src/resources/beam-contours.ts">BeamContourCountResponse</a></code>
- <code><a href="./src/resources/beam-contours.ts">BeamContourTupleResponse</a></code>

Methods:

- <code title="post /udl/beamcontour">client.beamContours.<a href="./src/resources/beam-contours.ts">create</a>({ ...params }) -> void</code>
- <code title="get /udl/beamcontour/{id}">client.beamContours.<a href="./src/resources/beam-contours.ts">retrieve</a>(id) -> BeamcontourFull</code>
- <code title="put /udl/beamcontour/{id}">client.beamContours.<a href="./src/resources/beam-contours.ts">update</a>(pathId, { ...params }) -> void</code>
- <code title="get /udl/beamcontour">client.beamContours.<a href="./src/resources/beam-contours.ts">list</a>({ ...params }) -> BeamContourListResponse</code>
- <code title="delete /udl/beamcontour/{id}">client.beamContours.<a href="./src/resources/beam-contours.ts">delete</a>(id) -> void</code>
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
- <code title="get /udl/bus/{id}">client.buses.<a href="./src/resources/buses.ts">retrieve</a>(id) -> BusFull</code>
- <code title="put /udl/bus/{id}">client.buses.<a href="./src/resources/buses.ts">update</a>(pathId, { ...params }) -> void</code>
- <code title="get /udl/bus">client.buses.<a href="./src/resources/buses.ts">list</a>() -> BusListResponse</code>
- <code title="delete /udl/bus/{id}">client.buses.<a href="./src/resources/buses.ts">delete</a>(id) -> void</code>
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
- <code title="get /udl/channel/{id}">client.channels.<a href="./src/resources/channels.ts">retrieve</a>(id) -> ChannelFull</code>
- <code title="put /udl/channel/{id}">client.channels.<a href="./src/resources/channels.ts">update</a>(pathId, { ...params }) -> void</code>
- <code title="get /udl/channel">client.channels.<a href="./src/resources/channels.ts">list</a>() -> ChannelListResponse</code>
- <code title="delete /udl/channel/{id}">client.channels.<a href="./src/resources/channels.ts">delete</a>(id) -> void</code>
- <code title="get /udl/channel/count">client.channels.<a href="./src/resources/channels.ts">count</a>() -> string</code>
- <code title="get /udl/channel/queryhelp">client.channels.<a href="./src/resources/channels.ts">queryhelp</a>() -> void</code>
- <code title="get /udl/channel/tuple">client.channels.<a href="./src/resources/channels.ts">tuple</a>({ ...params }) -> ChannelTupleResponse</code>

# CollectRequests

Types:

- <code><a href="./src/resources/collect-requests/collect-requests.ts">CollectRequestAbridged</a></code>
- <code><a href="./src/resources/collect-requests/collect-requests.ts">CollectRequestListResponse</a></code>
- <code><a href="./src/resources/collect-requests/collect-requests.ts">CollectRequestCountResponse</a></code>
- <code><a href="./src/resources/collect-requests/collect-requests.ts">CollectRequestTupleResponse</a></code>

Methods:

- <code title="post /udl/collectrequest">client.collectRequests.<a href="./src/resources/collect-requests/collect-requests.ts">create</a>({ ...params }) -> void</code>
- <code title="get /udl/collectrequest/{id}">client.collectRequests.<a href="./src/resources/collect-requests/collect-requests.ts">retrieve</a>(id) -> CollectRequestFull</code>
- <code title="get /udl/collectrequest">client.collectRequests.<a href="./src/resources/collect-requests/collect-requests.ts">list</a>({ ...params }) -> CollectRequestListResponse</code>
- <code title="get /udl/collectrequest/count">client.collectRequests.<a href="./src/resources/collect-requests/collect-requests.ts">count</a>({ ...params }) -> string</code>
- <code title="post /udl/collectrequest/createBulk">client.collectRequests.<a href="./src/resources/collect-requests/collect-requests.ts">createBulk</a>([ ...body ]) -> void</code>
- <code title="post /filedrop/udl-collectrequest">client.collectRequests.<a href="./src/resources/collect-requests/collect-requests.ts">createBulkV2</a>([ ...body ]) -> void</code>
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
- <code title="get /udl/collectresponse/{id}">client.collectResponses.<a href="./src/resources/collect-responses/collect-responses.ts">retrieve</a>(id) -> CollectResponseFull</code>
- <code title="get /udl/collectresponse">client.collectResponses.<a href="./src/resources/collect-responses/collect-responses.ts">list</a>({ ...params }) -> CollectResponseListResponse</code>
- <code title="get /udl/collectresponse/count">client.collectResponses.<a href="./src/resources/collect-responses/collect-responses.ts">count</a>({ ...params }) -> string</code>
- <code title="post /udl/collectresponse/createBulk">client.collectResponses.<a href="./src/resources/collect-responses/collect-responses.ts">createBulk</a>([ ...body ]) -> void</code>
- <code title="post /filedrop/udl-collectresponse">client.collectResponses.<a href="./src/resources/collect-responses/collect-responses.ts">createBulkV2</a>([ ...body ]) -> void</code>
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

# Comm

Types:

- <code><a href="./src/resources/comm.ts">CommAbridged</a></code>
- <code><a href="./src/resources/comm.ts">CommFull</a></code>
- <code><a href="./src/resources/comm.ts">CommListResponse</a></code>
- <code><a href="./src/resources/comm.ts">CommCountResponse</a></code>
- <code><a href="./src/resources/comm.ts">CommTupleResponse</a></code>

Methods:

- <code title="post /udl/comm">client.comm.<a href="./src/resources/comm.ts">create</a>({ ...params }) -> void</code>
- <code title="get /udl/comm/{id}">client.comm.<a href="./src/resources/comm.ts">retrieve</a>(id) -> CommFull</code>
- <code title="put /udl/comm/{id}">client.comm.<a href="./src/resources/comm.ts">update</a>(pathId, { ...params }) -> void</code>
- <code title="get /udl/comm">client.comm.<a href="./src/resources/comm.ts">list</a>() -> CommListResponse</code>
- <code title="delete /udl/comm/{id}">client.comm.<a href="./src/resources/comm.ts">delete</a>(id) -> void</code>
- <code title="get /udl/comm/count">client.comm.<a href="./src/resources/comm.ts">count</a>() -> string</code>
- <code title="get /udl/comm/queryhelp">client.comm.<a href="./src/resources/comm.ts">queryhelp</a>() -> void</code>
- <code title="get /udl/comm/tuple">client.comm.<a href="./src/resources/comm.ts">tuple</a>({ ...params }) -> CommTupleResponse</code>

# Conjunctions

Types:

- <code><a href="./src/resources/conjunctions/conjunctions.ts">ConjunctionAbridged</a></code>
- <code><a href="./src/resources/conjunctions/conjunctions.ts">ConjunctionFull</a></code>
- <code><a href="./src/resources/conjunctions/conjunctions.ts">ConjunctionListResponse</a></code>
- <code><a href="./src/resources/conjunctions/conjunctions.ts">ConjunctionCountResponse</a></code>
- <code><a href="./src/resources/conjunctions/conjunctions.ts">ConjunctionGetHistoryResponse</a></code>
- <code><a href="./src/resources/conjunctions/conjunctions.ts">ConjunctionTupleResponse</a></code>

Methods:

- <code title="get /udl/conjunction/{id}">client.conjunctions.<a href="./src/resources/conjunctions/conjunctions.ts">retrieve</a>(id) -> ConjunctionFull</code>
- <code title="get /udl/conjunction">client.conjunctions.<a href="./src/resources/conjunctions/conjunctions.ts">list</a>({ ...params }) -> ConjunctionListResponse</code>
- <code title="get /udl/conjunction/count">client.conjunctions.<a href="./src/resources/conjunctions/conjunctions.ts">count</a>({ ...params }) -> string</code>
- <code title="post /filedrop/udl-conjunction">client.conjunctions.<a href="./src/resources/conjunctions/conjunctions.ts">createBulkV2</a>([ ...body ]) -> void</code>
- <code title="post /udl/conjunction">client.conjunctions.<a href="./src/resources/conjunctions/conjunctions.ts">createUdl</a>({ ...params }) -> void</code>
- <code title="post /udl/conjunction/createBulk">client.conjunctions.<a href="./src/resources/conjunctions/conjunctions.ts">createBulk</a>([ ...body ]) -> void</code>
- <code title="get /udl/conjunction/history">client.conjunctions.<a href="./src/resources/conjunctions/conjunctions.ts">getHistory</a>({ ...params }) -> ConjunctionGetHistoryResponse</code>
- <code title="get /udl/conjunction/queryhelp">client.conjunctions.<a href="./src/resources/conjunctions/conjunctions.ts">queryhelp</a>() -> void</code>
- <code title="get /udl/conjunction/tuple">client.conjunctions.<a href="./src/resources/conjunctions/conjunctions.ts">tuple</a>({ ...params }) -> ConjunctionTupleResponse</code>
- <code title="post /filedrop/cdms">client.conjunctions.<a href="./src/resources/conjunctions/conjunctions.ts">uploadConjunctionDataMessage</a>({ ...params }) -> void</code>

## History

Types:

- <code><a href="./src/resources/conjunctions/history.ts">HistoryCountResponse</a></code>

Methods:

- <code title="get /udl/conjunction/history/aodr">client.conjunctions.history.<a href="./src/resources/conjunctions/history.ts">aodr</a>({ ...params }) -> void</code>
- <code title="get /udl/conjunction/history/count">client.conjunctions.history.<a href="./src/resources/conjunctions/history.ts">count</a>({ ...params }) -> string</code>

# Cots

Methods:

- <code title="post /udl/cot">client.cots.<a href="./src/resources/cots.ts">create</a>({ ...params }) -> void</code>

# Aviationriskmanagement

Types:

- <code><a href="./src/resources/aviationriskmanagement.ts">AviationriskmanagementRetrieveResponse</a></code>
- <code><a href="./src/resources/aviationriskmanagement.ts">AviationriskmanagementCountResponse</a></code>
- <code><a href="./src/resources/aviationriskmanagement.ts">AviationriskmanagementQueryResponse</a></code>
- <code><a href="./src/resources/aviationriskmanagement.ts">AviationriskmanagementTupleResponse</a></code>

Methods:

- <code title="post /udl/aviationriskmanagement">client.aviationriskmanagement.<a href="./src/resources/aviationriskmanagement.ts">create</a>({ ...params }) -> void</code>
- <code title="get /udl/aviationriskmanagement/{id}">client.aviationriskmanagement.<a href="./src/resources/aviationriskmanagement.ts">retrieve</a>(id) -> AviationriskmanagementRetrieveResponse</code>
- <code title="put /udl/aviationriskmanagement/{id}">client.aviationriskmanagement.<a href="./src/resources/aviationriskmanagement.ts">update</a>(pathId, { ...params }) -> void</code>
- <code title="delete /udl/aviationriskmanagement/{id}">client.aviationriskmanagement.<a href="./src/resources/aviationriskmanagement.ts">delete</a>(id) -> void</code>
- <code title="get /udl/aviationriskmanagement/count">client.aviationriskmanagement.<a href="./src/resources/aviationriskmanagement.ts">count</a>({ ...params }) -> string</code>
- <code title="post /udl/aviationriskmanagement/createBulk">client.aviationriskmanagement.<a href="./src/resources/aviationriskmanagement.ts">createBulk</a>([ ...body ]) -> void</code>
- <code title="post /filedrop/udl-aviationriskmanagement">client.aviationriskmanagement.<a href="./src/resources/aviationriskmanagement.ts">createBulkV2</a>([ ...body ]) -> void</code>
- <code title="get /udl/aviationriskmanagement">client.aviationriskmanagement.<a href="./src/resources/aviationriskmanagement.ts">query</a>({ ...params }) -> AviationriskmanagementQueryResponse</code>
- <code title="get /udl/aviationriskmanagement/queryhelp">client.aviationriskmanagement.<a href="./src/resources/aviationriskmanagement.ts">queryHelp</a>() -> void</code>
- <code title="get /udl/aviationriskmanagement/tuple">client.aviationriskmanagement.<a href="./src/resources/aviationriskmanagement.ts">tuple</a>({ ...params }) -> AviationriskmanagementTupleResponse</code>

# Dropzone

Types:

- <code><a href="./src/resources/dropzone.ts">DropzoneRetrieveResponse</a></code>
- <code><a href="./src/resources/dropzone.ts">DropzoneCountResponse</a></code>
- <code><a href="./src/resources/dropzone.ts">DropzoneQueryResponse</a></code>
- <code><a href="./src/resources/dropzone.ts">DropzoneTupleResponse</a></code>

Methods:

- <code title="post /udl/dropzone">client.dropzone.<a href="./src/resources/dropzone.ts">create</a>({ ...params }) -> void</code>
- <code title="get /udl/dropzone/{id}">client.dropzone.<a href="./src/resources/dropzone.ts">retrieve</a>(id) -> DropzoneRetrieveResponse</code>
- <code title="put /udl/dropzone/{id}">client.dropzone.<a href="./src/resources/dropzone.ts">update</a>(pathId, { ...params }) -> void</code>
- <code title="delete /udl/dropzone/{id}">client.dropzone.<a href="./src/resources/dropzone.ts">delete</a>(id) -> void</code>
- <code title="get /udl/dropzone/count">client.dropzone.<a href="./src/resources/dropzone.ts">count</a>() -> string</code>
- <code title="post /udl/dropzone/createBulk">client.dropzone.<a href="./src/resources/dropzone.ts">createBulk</a>([ ...body ]) -> void</code>
- <code title="post /filedrop/udl-dropzone">client.dropzone.<a href="./src/resources/dropzone.ts">createBulkV2</a>([ ...body ]) -> void</code>
- <code title="get /udl/dropzone">client.dropzone.<a href="./src/resources/dropzone.ts">query</a>() -> DropzoneQueryResponse</code>
- <code title="get /udl/dropzone/queryhelp">client.dropzone.<a href="./src/resources/dropzone.ts">queryHelp</a>() -> void</code>
- <code title="get /udl/dropzone/tuple">client.dropzone.<a href="./src/resources/dropzone.ts">tuple</a>({ ...params }) -> DropzoneTupleResponse</code>

# Emittergeolocation

Types:

- <code><a href="./src/resources/emittergeolocation.ts">EmittergeolocationRetrieveResponse</a></code>
- <code><a href="./src/resources/emittergeolocation.ts">EmittergeolocationCountResponse</a></code>
- <code><a href="./src/resources/emittergeolocation.ts">EmittergeolocationQueryResponse</a></code>
- <code><a href="./src/resources/emittergeolocation.ts">EmittergeolocationTupleResponse</a></code>

Methods:

- <code title="post /udl/emittergeolocation">client.emittergeolocation.<a href="./src/resources/emittergeolocation.ts">create</a>({ ...params }) -> void</code>
- <code title="get /udl/emittergeolocation/{id}">client.emittergeolocation.<a href="./src/resources/emittergeolocation.ts">retrieve</a>(id) -> EmittergeolocationRetrieveResponse</code>
- <code title="delete /udl/emittergeolocation/{id}">client.emittergeolocation.<a href="./src/resources/emittergeolocation.ts">delete</a>(id) -> void</code>
- <code title="get /udl/emittergeolocation/count">client.emittergeolocation.<a href="./src/resources/emittergeolocation.ts">count</a>({ ...params }) -> string</code>
- <code title="post /udl/emittergeolocation/createBulk">client.emittergeolocation.<a href="./src/resources/emittergeolocation.ts">createBulk</a>([ ...body ]) -> void</code>
- <code title="post /filedrop/udl-emittergeolocation">client.emittergeolocation.<a href="./src/resources/emittergeolocation.ts">createBulkV2</a>([ ...body ]) -> void</code>
- <code title="get /udl/emittergeolocation">client.emittergeolocation.<a href="./src/resources/emittergeolocation.ts">query</a>({ ...params }) -> EmittergeolocationQueryResponse</code>
- <code title="get /udl/emittergeolocation/queryhelp">client.emittergeolocation.<a href="./src/resources/emittergeolocation.ts">queryHelp</a>() -> void</code>
- <code title="get /udl/emittergeolocation/tuple">client.emittergeolocation.<a href="./src/resources/emittergeolocation.ts">tuple</a>({ ...params }) -> EmittergeolocationTupleResponse</code>

# Featureassessment

Types:

- <code><a href="./src/resources/featureassessment/featureassessment.ts">FeatureassessmentRetrieveResponse</a></code>
- <code><a href="./src/resources/featureassessment/featureassessment.ts">FeatureassessmentCountResponse</a></code>
- <code><a href="./src/resources/featureassessment/featureassessment.ts">FeatureassessmentQueryResponse</a></code>
- <code><a href="./src/resources/featureassessment/featureassessment.ts">FeatureassessmentTupleResponse</a></code>

Methods:

- <code title="post /udl/featureassessment">client.featureassessment.<a href="./src/resources/featureassessment/featureassessment.ts">create</a>({ ...params }) -> void</code>
- <code title="get /udl/featureassessment/{id}">client.featureassessment.<a href="./src/resources/featureassessment/featureassessment.ts">retrieve</a>(id) -> FeatureassessmentRetrieveResponse</code>
- <code title="get /udl/featureassessment/count">client.featureassessment.<a href="./src/resources/featureassessment/featureassessment.ts">count</a>({ ...params }) -> string</code>
- <code title="post /udl/featureassessment/createBulk">client.featureassessment.<a href="./src/resources/featureassessment/featureassessment.ts">createBulk</a>([ ...body ]) -> void</code>
- <code title="post /filedrop/udl-featureassessment">client.featureassessment.<a href="./src/resources/featureassessment/featureassessment.ts">createBulkV2</a>([ ...body ]) -> void</code>
- <code title="get /udl/featureassessment">client.featureassessment.<a href="./src/resources/featureassessment/featureassessment.ts">query</a>({ ...params }) -> FeatureassessmentQueryResponse</code>
- <code title="get /udl/featureassessment/queryhelp">client.featureassessment.<a href="./src/resources/featureassessment/featureassessment.ts">queryHelp</a>() -> void</code>
- <code title="get /udl/featureassessment/tuple">client.featureassessment.<a href="./src/resources/featureassessment/featureassessment.ts">tuple</a>({ ...params }) -> FeatureassessmentTupleResponse</code>

## History

Types:

- <code><a href="./src/resources/featureassessment/history.ts">HistoryCountResponse</a></code>
- <code><a href="./src/resources/featureassessment/history.ts">HistoryQueryResponse</a></code>

Methods:

- <code title="get /udl/featureassessment/history/count">client.featureassessment.history.<a href="./src/resources/featureassessment/history.ts">count</a>({ ...params }) -> string</code>
- <code title="get /udl/featureassessment/history">client.featureassessment.history.<a href="./src/resources/featureassessment/history.ts">query</a>({ ...params }) -> HistoryQueryResponse</code>
- <code title="get /udl/featureassessment/history/aodr">client.featureassessment.history.<a href="./src/resources/featureassessment/history.ts">writeAodr</a>({ ...params }) -> void</code>

# Globalatmosphericmodel

Types:

- <code><a href="./src/resources/globalatmosphericmodel/globalatmosphericmodel.ts">GlobalatmosphericmodelRetrieveResponse</a></code>
- <code><a href="./src/resources/globalatmosphericmodel/globalatmosphericmodel.ts">GlobalatmosphericmodelCountResponse</a></code>
- <code><a href="./src/resources/globalatmosphericmodel/globalatmosphericmodel.ts">GlobalatmosphericmodelQueryResponse</a></code>
- <code><a href="./src/resources/globalatmosphericmodel/globalatmosphericmodel.ts">GlobalatmosphericmodelTupleResponse</a></code>

Methods:

- <code title="get /udl/globalatmosphericmodel/{id}">client.globalatmosphericmodel.<a href="./src/resources/globalatmosphericmodel/globalatmosphericmodel.ts">retrieve</a>(id) -> GlobalatmosphericmodelRetrieveResponse</code>
- <code title="get /udl/globalatmosphericmodel/count">client.globalatmosphericmodel.<a href="./src/resources/globalatmosphericmodel/globalatmosphericmodel.ts">count</a>({ ...params }) -> string</code>
- <code title="post /filedrop/udl-globalatmosphericmodel">client.globalatmosphericmodel.<a href="./src/resources/globalatmosphericmodel/globalatmosphericmodel.ts">createBulkV2</a>({ ...params }) -> void</code>
- <code title="get /udl/globalatmosphericmodel/getFile/{id}">client.globalatmosphericmodel.<a href="./src/resources/globalatmosphericmodel/globalatmosphericmodel.ts">getFile</a>(id) -> Response</code>
- <code title="get /udl/globalatmosphericmodel">client.globalatmosphericmodel.<a href="./src/resources/globalatmosphericmodel/globalatmosphericmodel.ts">query</a>({ ...params }) -> GlobalatmosphericmodelQueryResponse</code>
- <code title="get /udl/globalatmosphericmodel/queryhelp">client.globalatmosphericmodel.<a href="./src/resources/globalatmosphericmodel/globalatmosphericmodel.ts">queryHelp</a>() -> void</code>
- <code title="get /udl/globalatmosphericmodel/tuple">client.globalatmosphericmodel.<a href="./src/resources/globalatmosphericmodel/globalatmosphericmodel.ts">tuple</a>({ ...params }) -> GlobalatmosphericmodelTupleResponse</code>

## History

Types:

- <code><a href="./src/resources/globalatmosphericmodel/history.ts">HistoryCountResponse</a></code>
- <code><a href="./src/resources/globalatmosphericmodel/history.ts">HistoryQueryResponse</a></code>

Methods:

- <code title="get /udl/globalatmosphericmodel/history/count">client.globalatmosphericmodel.history.<a href="./src/resources/globalatmosphericmodel/history.ts">count</a>({ ...params }) -> string</code>
- <code title="get /udl/globalatmosphericmodel/history">client.globalatmosphericmodel.history.<a href="./src/resources/globalatmosphericmodel/history.ts">query</a>({ ...params }) -> HistoryQueryResponse</code>
- <code title="get /udl/globalatmosphericmodel/history/aodr">client.globalatmosphericmodel.history.<a href="./src/resources/globalatmosphericmodel/history.ts">writeAodr</a>({ ...params }) -> void</code>

# Routestats

Types:

- <code><a href="./src/resources/routestats.ts">RoutestatRetrieveResponse</a></code>
- <code><a href="./src/resources/routestats.ts">RoutestatCountResponse</a></code>
- <code><a href="./src/resources/routestats.ts">RoutestatQueryResponse</a></code>
- <code><a href="./src/resources/routestats.ts">RoutestatTupleResponse</a></code>

Methods:

- <code title="post /udl/routestats">client.routestats.<a href="./src/resources/routestats.ts">create</a>({ ...params }) -> void</code>
- <code title="get /udl/routestats/{id}">client.routestats.<a href="./src/resources/routestats.ts">retrieve</a>(id) -> RoutestatRetrieveResponse</code>
- <code title="put /udl/routestats/{id}">client.routestats.<a href="./src/resources/routestats.ts">update</a>(pathId, { ...params }) -> void</code>
- <code title="delete /udl/routestats/{id}">client.routestats.<a href="./src/resources/routestats.ts">delete</a>(id) -> void</code>
- <code title="get /udl/routestats/count">client.routestats.<a href="./src/resources/routestats.ts">count</a>() -> string</code>
- <code title="post /udl/routestats/createBulk">client.routestats.<a href="./src/resources/routestats.ts">createBulk</a>([ ...body ]) -> void</code>
- <code title="post /filedrop/udl-routestats">client.routestats.<a href="./src/resources/routestats.ts">createBulkV2</a>([ ...body ]) -> void</code>
- <code title="get /udl/routestats">client.routestats.<a href="./src/resources/routestats.ts">query</a>() -> RoutestatQueryResponse</code>
- <code title="get /udl/routestats/queryhelp">client.routestats.<a href="./src/resources/routestats.ts">queryHelp</a>() -> void</code>
- <code title="get /udl/routestats/tuple">client.routestats.<a href="./src/resources/routestats.ts">tuple</a>({ ...params }) -> RoutestatTupleResponse</code>

# Countries

Types:

- <code><a href="./src/resources/countries.ts">CountryAbridged</a></code>
- <code><a href="./src/resources/countries.ts">CountryFull</a></code>
- <code><a href="./src/resources/countries.ts">CountryListResponse</a></code>
- <code><a href="./src/resources/countries.ts">CountryCountResponse</a></code>
- <code><a href="./src/resources/countries.ts">CountryTupleResponse</a></code>

Methods:

- <code title="post /udl/country">client.countries.<a href="./src/resources/countries.ts">create</a>({ ...params }) -> void</code>
- <code title="get /udl/country/{code}">client.countries.<a href="./src/resources/countries.ts">retrieve</a>(code) -> CountryFull</code>
- <code title="put /udl/country/{code}">client.countries.<a href="./src/resources/countries.ts">update</a>(pathCode, { ...params }) -> void</code>
- <code title="get /udl/country">client.countries.<a href="./src/resources/countries.ts">list</a>() -> CountryListResponse</code>
- <code title="delete /udl/country/{code}">client.countries.<a href="./src/resources/countries.ts">delete</a>(code) -> void</code>
- <code title="get /udl/country/count">client.countries.<a href="./src/resources/countries.ts">count</a>() -> string</code>
- <code title="get /udl/country/queryhelp">client.countries.<a href="./src/resources/countries.ts">queryhelp</a>() -> void</code>
- <code title="get /udl/country/tuple">client.countries.<a href="./src/resources/countries.ts">tuple</a>({ ...params }) -> CountryTupleResponse</code>

# Crew

Types:

- <code><a href="./src/resources/crew.ts">CrewAbridged</a></code>
- <code><a href="./src/resources/crew.ts">CrewFull</a></code>
- <code><a href="./src/resources/crew.ts">CrewListResponse</a></code>
- <code><a href="./src/resources/crew.ts">CrewCountResponse</a></code>
- <code><a href="./src/resources/crew.ts">CrewTupleResponse</a></code>

Methods:

- <code title="post /udl/crew">client.crew.<a href="./src/resources/crew.ts">create</a>({ ...params }) -> void</code>
- <code title="get /udl/crew/{id}">client.crew.<a href="./src/resources/crew.ts">retrieve</a>(id) -> CrewFull</code>
- <code title="put /udl/crew/{id}">client.crew.<a href="./src/resources/crew.ts">update</a>(pathId, { ...params }) -> void</code>
- <code title="get /udl/crew">client.crew.<a href="./src/resources/crew.ts">list</a>() -> CrewListResponse</code>
- <code title="get /udl/crew/count">client.crew.<a href="./src/resources/crew.ts">count</a>() -> string</code>
- <code title="post /filedrop/udl-crew">client.crew.<a href="./src/resources/crew.ts">createBulkV2</a>([ ...body ]) -> void</code>
- <code title="get /udl/crew/queryhelp">client.crew.<a href="./src/resources/crew.ts">queryhelp</a>() -> void</code>
- <code title="get /udl/crew/tuple">client.crew.<a href="./src/resources/crew.ts">tuple</a>({ ...params }) -> CrewTupleResponse</code>

# Diffofarrival

Types:

- <code><a href="./src/resources/diffofarrival/diffofarrival.ts">DiffofarrivalTupleResponse</a></code>

Methods:

- <code title="get /udl/diffofarrival/{id}">client.diffofarrival.<a href="./src/resources/diffofarrival/diffofarrival.ts">retrieve</a>(id) -> DiffofarrivalFull</code>
- <code title="post /filedrop/udl-diffofarrival">client.diffofarrival.<a href="./src/resources/diffofarrival/diffofarrival.ts">createBulkV2</a>([ ...body ]) -> void</code>
- <code title="get /udl/diffofarrival/queryhelp">client.diffofarrival.<a href="./src/resources/diffofarrival/diffofarrival.ts">queryhelp</a>() -> void</code>
- <code title="get /udl/diffofarrival/tuple">client.diffofarrival.<a href="./src/resources/diffofarrival/diffofarrival.ts">tuple</a>({ ...params }) -> DiffofarrivalTupleResponse</code>

## History

Types:

- <code><a href="./src/resources/diffofarrival/history.ts">HistoryCountResponse</a></code>

Methods:

- <code title="get /udl/diffofarrival/history/count">client.diffofarrival.history.<a href="./src/resources/diffofarrival/history.ts">count</a>({ ...params }) -> string</code>

# DiplomaticClearance

Types:

- <code><a href="./src/resources/diplomatic-clearance/diplomatic-clearance.ts">DiplomaticClearanceListResponse</a></code>
- <code><a href="./src/resources/diplomatic-clearance/diplomatic-clearance.ts">DiplomaticClearanceCountResponse</a></code>
- <code><a href="./src/resources/diplomatic-clearance/diplomatic-clearance.ts">DiplomaticClearanceTupleResponse</a></code>

Methods:

- <code title="post /udl/diplomaticclearance">client.diplomaticClearance.<a href="./src/resources/diplomatic-clearance/diplomatic-clearance.ts">create</a>({ ...params }) -> void</code>
- <code title="get /udl/diplomaticclearance/{id}">client.diplomaticClearance.<a href="./src/resources/diplomatic-clearance/diplomatic-clearance.ts">retrieve</a>(id) -> DiplomaticclearanceFull</code>
- <code title="put /udl/diplomaticclearance/{id}">client.diplomaticClearance.<a href="./src/resources/diplomatic-clearance/diplomatic-clearance.ts">update</a>(pathId, { ...params }) -> void</code>
- <code title="get /udl/diplomaticclearance">client.diplomaticClearance.<a href="./src/resources/diplomatic-clearance/diplomatic-clearance.ts">list</a>({ ...params }) -> DiplomaticClearanceListResponse</code>
- <code title="delete /udl/diplomaticclearance/{id}">client.diplomaticClearance.<a href="./src/resources/diplomatic-clearance/diplomatic-clearance.ts">delete</a>(id) -> void</code>
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

## Country

Types:

- <code><a href="./src/resources/diplomatic-clearance/country.ts">CountryRetrieveResponse</a></code>
- <code><a href="./src/resources/diplomatic-clearance/country.ts">CountryListResponse</a></code>
- <code><a href="./src/resources/diplomatic-clearance/country.ts">CountryCountResponse</a></code>
- <code><a href="./src/resources/diplomatic-clearance/country.ts">CountryTupleResponse</a></code>

Methods:

- <code title="post /udl/diplomaticclearancecountry">client.diplomaticClearance.country.<a href="./src/resources/diplomatic-clearance/country.ts">create</a>({ ...params }) -> void</code>
- <code title="get /udl/diplomaticclearancecountry/{id}">client.diplomaticClearance.country.<a href="./src/resources/diplomatic-clearance/country.ts">retrieve</a>(id) -> CountryRetrieveResponse</code>
- <code title="put /udl/diplomaticclearancecountry/{id}">client.diplomaticClearance.country.<a href="./src/resources/diplomatic-clearance/country.ts">update</a>(pathId, { ...params }) -> void</code>
- <code title="get /udl/diplomaticclearancecountry">client.diplomaticClearance.country.<a href="./src/resources/diplomatic-clearance/country.ts">list</a>() -> CountryListResponse</code>
- <code title="delete /udl/diplomaticclearancecountry/{id}">client.diplomaticClearance.country.<a href="./src/resources/diplomatic-clearance/country.ts">delete</a>(id) -> void</code>
- <code title="get /udl/diplomaticclearancecountry/count">client.diplomaticClearance.country.<a href="./src/resources/diplomatic-clearance/country.ts">count</a>() -> string</code>
- <code title="post /udl/diplomaticclearancecountry/createBulk">client.diplomaticClearance.country.<a href="./src/resources/diplomatic-clearance/country.ts">createBulk</a>([ ...body ]) -> void</code>
- <code title="post /filedrop/udl-diplomaticclearancecountry">client.diplomaticClearance.country.<a href="./src/resources/diplomatic-clearance/country.ts">createBulkV2</a>([ ...body ]) -> void</code>
- <code title="get /udl/diplomaticclearancecountry/queryhelp">client.diplomaticClearance.country.<a href="./src/resources/diplomatic-clearance/country.ts">queryHelp</a>() -> void</code>
- <code title="get /udl/diplomaticclearancecountry/tuple">client.diplomaticClearance.country.<a href="./src/resources/diplomatic-clearance/country.ts">tuple</a>({ ...params }) -> CountryTupleResponse</code>

# DriftHistory

Types:

- <code><a href="./src/resources/drift-history.ts">DriftHistoryListResponse</a></code>
- <code><a href="./src/resources/drift-history.ts">DriftHistoryCountResponse</a></code>
- <code><a href="./src/resources/drift-history.ts">DriftHistoryTupleResponse</a></code>

Methods:

- <code title="get /udl/drifthistory/{id}">client.driftHistory.<a href="./src/resources/drift-history.ts">retrieve</a>(id) -> DriftHistory</code>
- <code title="get /udl/drifthistory">client.driftHistory.<a href="./src/resources/drift-history.ts">list</a>() -> DriftHistoryListResponse</code>
- <code title="get /udl/drifthistory/count">client.driftHistory.<a href="./src/resources/drift-history.ts">count</a>() -> string</code>
- <code title="get /udl/drifthistory/queryhelp">client.driftHistory.<a href="./src/resources/drift-history.ts">queryhelp</a>() -> void</code>
- <code title="get /udl/drifthistory/tuple">client.driftHistory.<a href="./src/resources/drift-history.ts">tuple</a>({ ...params }) -> DriftHistoryTupleResponse</code>

# Ecpsdr

Methods:

- <code title="post /filedrop/udl-ecpsdr">client.ecpsdr.<a href="./src/resources/ecpsdr.ts">createBulkV2</a>([ ...body ]) -> void</code>

# EffectRequests

Types:

- <code><a href="./src/resources/effect-requests/effect-requests.ts">EffectRequestRetrieveResponse</a></code>
- <code><a href="./src/resources/effect-requests/effect-requests.ts">EffectRequestListResponse</a></code>
- <code><a href="./src/resources/effect-requests/effect-requests.ts">EffectRequestCountResponse</a></code>
- <code><a href="./src/resources/effect-requests/effect-requests.ts">EffectRequestTupleResponse</a></code>

Methods:

- <code title="post /udl/effectrequest">client.effectRequests.<a href="./src/resources/effect-requests/effect-requests.ts">create</a>({ ...params }) -> void</code>
- <code title="get /udl/effectrequest/{id}">client.effectRequests.<a href="./src/resources/effect-requests/effect-requests.ts">retrieve</a>(id) -> EffectRequestRetrieveResponse</code>
- <code title="get /udl/effectrequest">client.effectRequests.<a href="./src/resources/effect-requests/effect-requests.ts">list</a>({ ...params }) -> EffectRequestListResponse</code>
- <code title="get /udl/effectrequest/count">client.effectRequests.<a href="./src/resources/effect-requests/effect-requests.ts">count</a>({ ...params }) -> string</code>
- <code title="post /udl/effectrequest/createBulk">client.effectRequests.<a href="./src/resources/effect-requests/effect-requests.ts">createBulk</a>([ ...body ]) -> void</code>
- <code title="post /filedrop/udl-effectrequest">client.effectRequests.<a href="./src/resources/effect-requests/effect-requests.ts">createBulkV2</a>([ ...body ]) -> void</code>
- <code title="get /udl/effectrequest/queryhelp">client.effectRequests.<a href="./src/resources/effect-requests/effect-requests.ts">queryHelp</a>() -> void</code>
- <code title="get /udl/effectrequest/tuple">client.effectRequests.<a href="./src/resources/effect-requests/effect-requests.ts">tuple</a>({ ...params }) -> EffectRequestTupleResponse</code>

## History

Types:

- <code><a href="./src/resources/effect-requests/history.ts">HistoryListResponse</a></code>
- <code><a href="./src/resources/effect-requests/history.ts">HistoryCountResponse</a></code>

Methods:

- <code title="get /udl/effectrequest/history">client.effectRequests.history.<a href="./src/resources/effect-requests/history.ts">list</a>({ ...params }) -> HistoryListResponse</code>
- <code title="get /udl/effectrequest/history/aodr">client.effectRequests.history.<a href="./src/resources/effect-requests/history.ts">aodr</a>({ ...params }) -> void</code>
- <code title="get /udl/effectrequest/history/count">client.effectRequests.history.<a href="./src/resources/effect-requests/history.ts">count</a>({ ...params }) -> string</code>

# EffectResponses

Types:

- <code><a href="./src/resources/effect-responses/effect-responses.ts">EffectResponseRetrieveResponse</a></code>
- <code><a href="./src/resources/effect-responses/effect-responses.ts">EffectResponseListResponse</a></code>
- <code><a href="./src/resources/effect-responses/effect-responses.ts">EffectResponseCountResponse</a></code>
- <code><a href="./src/resources/effect-responses/effect-responses.ts">EffectResponseTupleResponse</a></code>

Methods:

- <code title="post /udl/effectresponse">client.effectResponses.<a href="./src/resources/effect-responses/effect-responses.ts">create</a>({ ...params }) -> void</code>
- <code title="get /udl/effectresponse/{id}">client.effectResponses.<a href="./src/resources/effect-responses/effect-responses.ts">retrieve</a>(id) -> EffectResponseRetrieveResponse</code>
- <code title="get /udl/effectresponse">client.effectResponses.<a href="./src/resources/effect-responses/effect-responses.ts">list</a>({ ...params }) -> EffectResponseListResponse</code>
- <code title="get /udl/effectresponse/count">client.effectResponses.<a href="./src/resources/effect-responses/effect-responses.ts">count</a>({ ...params }) -> string</code>
- <code title="post /udl/effectresponse/createBulk">client.effectResponses.<a href="./src/resources/effect-responses/effect-responses.ts">createBulk</a>([ ...body ]) -> void</code>
- <code title="post /filedrop/udl-effectresponse">client.effectResponses.<a href="./src/resources/effect-responses/effect-responses.ts">createBulkV2</a>([ ...body ]) -> void</code>
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
- <code><a href="./src/resources/elsets/elsets.ts">ElsetIngest</a></code>
- <code><a href="./src/resources/elsets/elsets.ts">ElsetAbridged</a></code>
- <code><a href="./src/resources/elsets/elsets.ts">ElsetListResponse</a></code>
- <code><a href="./src/resources/elsets/elsets.ts">ElsetCountResponse</a></code>
- <code><a href="./src/resources/elsets/elsets.ts">ElsetTupleResponse</a></code>

Methods:

- <code title="post /udl/elset">client.elsets.<a href="./src/resources/elsets/elsets.ts">create</a>({ ...params }) -> void</code>
- <code title="get /udl/elset/{id}">client.elsets.<a href="./src/resources/elsets/elsets.ts">retrieve</a>(id) -> Elset</code>
- <code title="get /udl/elset">client.elsets.<a href="./src/resources/elsets/elsets.ts">list</a>({ ...params }) -> ElsetListResponse</code>
- <code title="get /udl/elset/count">client.elsets.<a href="./src/resources/elsets/elsets.ts">count</a>({ ...params }) -> string</code>
- <code title="post /udl/elset/createBulk">client.elsets.<a href="./src/resources/elsets/elsets.ts">createBulk</a>([ ...body ]) -> void</code>
- <code title="post /udl/elset/createBulkFromTLE">client.elsets.<a href="./src/resources/elsets/elsets.ts">createBulkFromTle</a>({ ...params }) -> void</code>
- <code title="post /filedrop/udl-elset">client.elsets.<a href="./src/resources/elsets/elsets.ts">createBulkV2</a>([ ...body ]) -> void</code>
- <code title="get /udl/currentelset/queryhelp">client.elsets.<a href="./src/resources/elsets/elsets.ts">queryCurrentElsetHelp</a>() -> void</code>
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

# EngineDetails

Types:

- <code><a href="./src/resources/engine-details.ts">EngineDetailsFull</a></code>

Methods:

- <code title="post /udl/enginedetails">client.engineDetails.<a href="./src/resources/engine-details.ts">create</a>({ ...params }) -> void</code>
- <code title="get /udl/enginedetails/{id}">client.engineDetails.<a href="./src/resources/engine-details.ts">retrieve</a>(id) -> EngineDetailsFull</code>
- <code title="put /udl/enginedetails/{id}">client.engineDetails.<a href="./src/resources/engine-details.ts">update</a>(pathId, { ...params }) -> void</code>
- <code title="delete /udl/enginedetails/{id}">client.engineDetails.<a href="./src/resources/engine-details.ts">delete</a>(id) -> void</code>

# Enginedetails

Types:

- <code><a href="./src/resources/enginedetails.ts">EngineDetailsAbridged</a></code>
- <code><a href="./src/resources/enginedetails.ts">EnginedetailListResponse</a></code>

Methods:

- <code title="get /udl/enginedetails">client.enginedetails.<a href="./src/resources/enginedetails.ts">list</a>() -> EnginedetailListResponse</code>

# Engines

Types:

- <code><a href="./src/resources/engines.ts">Engine</a></code>
- <code><a href="./src/resources/engines.ts">EngineAbridged</a></code>
- <code><a href="./src/resources/engines.ts">EngineListResponse</a></code>
- <code><a href="./src/resources/engines.ts">EngineCountResponse</a></code>
- <code><a href="./src/resources/engines.ts">EngineTupleResponse</a></code>

Methods:

- <code title="post /udl/engine">client.engines.<a href="./src/resources/engines.ts">create</a>({ ...params }) -> void</code>
- <code title="get /udl/engine/{id}">client.engines.<a href="./src/resources/engines.ts">retrieve</a>(id) -> Engine</code>
- <code title="put /udl/engine/{id}">client.engines.<a href="./src/resources/engines.ts">update</a>(pathId, { ...params }) -> void</code>
- <code title="get /udl/engine">client.engines.<a href="./src/resources/engines.ts">list</a>() -> EngineListResponse</code>
- <code title="delete /udl/engine/{id}">client.engines.<a href="./src/resources/engines.ts">delete</a>(id) -> void</code>
- <code title="get /udl/engine/count">client.engines.<a href="./src/resources/engines.ts">count</a>() -> string</code>
- <code title="get /udl/engine/queryhelp">client.engines.<a href="./src/resources/engines.ts">queryhelp</a>() -> void</code>
- <code title="get /udl/engine/tuple">client.engines.<a href="./src/resources/engines.ts">tuple</a>({ ...params }) -> EngineTupleResponse</code>

# Entities

Types:

- <code><a href="./src/resources/entities.ts">EntityAbridged</a></code>
- <code><a href="./src/resources/entities.ts">EntityFull</a></code>
- <code><a href="./src/resources/entities.ts">EntityIngest</a></code>
- <code><a href="./src/resources/entities.ts">EntityListResponse</a></code>
- <code><a href="./src/resources/entities.ts">EntityCountResponse</a></code>
- <code><a href="./src/resources/entities.ts">EntityGetAllTypesResponse</a></code>
- <code><a href="./src/resources/entities.ts">EntityTupleResponse</a></code>

Methods:

- <code title="post /udl/entity">client.entities.<a href="./src/resources/entities.ts">create</a>({ ...params }) -> void</code>
- <code title="get /udl/entity/{id}">client.entities.<a href="./src/resources/entities.ts">retrieve</a>(id) -> EntityFull</code>
- <code title="put /udl/entity/{id}">client.entities.<a href="./src/resources/entities.ts">update</a>(id, { ...params }) -> void</code>
- <code title="get /udl/entity">client.entities.<a href="./src/resources/entities.ts">list</a>() -> EntityListResponse</code>
- <code title="delete /udl/entity/{id}">client.entities.<a href="./src/resources/entities.ts">delete</a>(id) -> void</code>
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
- <code title="post /filedrop/udl-eo">client.eoObservations.<a href="./src/resources/eo-observations/eo-observations.ts">createBulkV2</a>([ ...body ]) -> void</code>

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

- <code title="get /udl/eoobservation/{id}">client.eoobservations.<a href="./src/resources/eoobservations.ts">retrieve</a>(id) -> EoObservationFull</code>
- <code title="get /udl/eoobservation/queryhelp">client.eoobservations.<a href="./src/resources/eoobservations.ts">queryhelp</a>() -> void</code>
- <code title="get /udl/eoobservation/tuple">client.eoobservations.<a href="./src/resources/eoobservations.ts">tuple</a>({ ...params }) -> EoobservationTupleResponse</code>

# Eop

Types:

- <code><a href="./src/resources/eop/eop.ts">EopAbridged</a></code>
- <code><a href="./src/resources/eop/eop.ts">EopListResponse</a></code>
- <code><a href="./src/resources/eop/eop.ts">EopCountResponse</a></code>
- <code><a href="./src/resources/eop/eop.ts">EopListTupleResponse</a></code>

Methods:

- <code title="post /udl/eop">client.eop.<a href="./src/resources/eop/eop.ts">create</a>({ ...params }) -> void</code>
- <code title="get /udl/eop/{id}">client.eop.<a href="./src/resources/eop/eop.ts">retrieve</a>(id) -> EopFull</code>
- <code title="put /udl/eop/{id}">client.eop.<a href="./src/resources/eop/eop.ts">update</a>(pathId, { ...params }) -> void</code>
- <code title="get /udl/eop">client.eop.<a href="./src/resources/eop/eop.ts">list</a>({ ...params }) -> EopListResponse</code>
- <code title="delete /udl/eop/{id}">client.eop.<a href="./src/resources/eop/eop.ts">delete</a>(id) -> void</code>
- <code title="get /udl/eop/count">client.eop.<a href="./src/resources/eop/eop.ts">count</a>({ ...params }) -> string</code>
- <code title="get /udl/eop/tuple">client.eop.<a href="./src/resources/eop/eop.ts">listTuple</a>({ ...params }) -> EopListTupleResponse</code>
- <code title="get /udl/eop/queryhelp">client.eop.<a href="./src/resources/eop/eop.ts">queryhelp</a>() -> void</code>

## History

Types:

- <code><a href="./src/resources/eop/history.ts">HistoryListResponse</a></code>
- <code><a href="./src/resources/eop/history.ts">HistoryCountResponse</a></code>

Methods:

- <code title="get /udl/eop/history">client.eop.history.<a href="./src/resources/eop/history.ts">list</a>({ ...params }) -> HistoryListResponse</code>
- <code title="get /udl/eop/history/aodr">client.eop.history.<a href="./src/resources/eop/history.ts">aodr</a>({ ...params }) -> void</code>
- <code title="get /udl/eop/history/count">client.eop.history.<a href="./src/resources/eop/history.ts">count</a>({ ...params }) -> string</code>

# Ephemeris

Types:

- <code><a href="./src/resources/ephemeris/ephemeris.ts">EphemerisAbridged</a></code>
- <code><a href="./src/resources/ephemeris/ephemeris.ts">EphemerisListResponse</a></code>
- <code><a href="./src/resources/ephemeris/ephemeris.ts">EphemerisCountResponse</a></code>
- <code><a href="./src/resources/ephemeris/ephemeris.ts">EphemerisTupleResponse</a></code>

Methods:

- <code title="get /udl/ephemeris">client.ephemeris.<a href="./src/resources/ephemeris/ephemeris.ts">list</a>({ ...params }) -> EphemerisListResponse</code>
- <code title="get /udl/ephemeris/count">client.ephemeris.<a href="./src/resources/ephemeris/ephemeris.ts">count</a>({ ...params }) -> string</code>
- <code title="post /filedrop/udl-ephset">client.ephemeris.<a href="./src/resources/ephemeris/ephemeris.ts">createBulkV2</a>({ ...params }) -> void</code>
- <code title="post /filedrop/ephem">client.ephemeris.<a href="./src/resources/ephemeris/ephemeris.ts">fileUpload</a>({ ...params }) -> void</code>
- <code title="get /udl/ephemeris/queryhelp">client.ephemeris.<a href="./src/resources/ephemeris/ephemeris.ts">queryhelp</a>() -> void</code>
- <code title="get /udl/ephemeris/tuple">client.ephemeris.<a href="./src/resources/ephemeris/ephemeris.ts">tuple</a>({ ...params }) -> EphemerisTupleResponse</code>

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

# EphemerisSets

Types:

- <code><a href="./src/resources/ephemeris-sets/ephemeris-sets.ts">EphemerisSet</a></code>
- <code><a href="./src/resources/ephemeris-sets/ephemeris-sets.ts">EphemerisSetAbridged</a></code>
- <code><a href="./src/resources/ephemeris-sets/ephemeris-sets.ts">EphemerisSetListResponse</a></code>
- <code><a href="./src/resources/ephemeris-sets/ephemeris-sets.ts">EphemerisSetCountResponse</a></code>
- <code><a href="./src/resources/ephemeris-sets/ephemeris-sets.ts">EphemerisSetTupleResponse</a></code>

Methods:

- <code title="post /udl/ephemerisset">client.ephemerisSets.<a href="./src/resources/ephemeris-sets/ephemeris-sets.ts">create</a>({ ...params }) -> void</code>
- <code title="get /udl/ephemerisset/{id}">client.ephemerisSets.<a href="./src/resources/ephemeris-sets/ephemeris-sets.ts">retrieve</a>(id) -> EphemerisSet</code>
- <code title="get /udl/ephemerisset">client.ephemerisSets.<a href="./src/resources/ephemeris-sets/ephemeris-sets.ts">list</a>({ ...params }) -> EphemerisSetListResponse</code>
- <code title="get /udl/ephemerisset/count">client.ephemerisSets.<a href="./src/resources/ephemeris-sets/ephemeris-sets.ts">count</a>({ ...params }) -> string</code>
- <code title="get /udl/ephemerisset/getFile/{id}">client.ephemerisSets.<a href="./src/resources/ephemeris-sets/ephemeris-sets.ts">fileRetrieve</a>(id) -> Response</code>
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
- <code title="get /udl/equipment/{id}">client.equipment.<a href="./src/resources/equipment.ts">retrieve</a>(id) -> EquipmentFull</code>
- <code title="put /udl/equipment/{id}">client.equipment.<a href="./src/resources/equipment.ts">update</a>(pathId, { ...params }) -> void</code>
- <code title="get /udl/equipment">client.equipment.<a href="./src/resources/equipment.ts">list</a>() -> EquipmentListResponse</code>
- <code title="delete /udl/equipment/{id}">client.equipment.<a href="./src/resources/equipment.ts">delete</a>(id) -> void</code>
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
- <code title="get /udl/equipmentremark/{id}">client.equipmentremarks.<a href="./src/resources/equipmentremarks.ts">retrieve</a>(id) -> EquipmentRemarkFull</code>
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
- <code title="get /udl/evac/{id}">client.evac.<a href="./src/resources/evac/evac.ts">retrieve</a>(id) -> EvacFull</code>
- <code title="get /udl/evac">client.evac.<a href="./src/resources/evac/evac.ts">list</a>({ ...params }) -> EvacListResponse</code>
- <code title="get /udl/evac/count">client.evac.<a href="./src/resources/evac/evac.ts">count</a>({ ...params }) -> string</code>
- <code title="post /udl/evac/createBulk">client.evac.<a href="./src/resources/evac/evac.ts">createBulk</a>([ ...body ]) -> void</code>
- <code title="post /filedrop/udl-evac">client.evac.<a href="./src/resources/evac/evac.ts">createBulkV2</a>([ ...body ]) -> void</code>
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

- <code><a href="./src/resources/event-evolution/event-evolution.ts">EventEvolutionListResponse</a></code>
- <code><a href="./src/resources/event-evolution/event-evolution.ts">EventEvolutionCountResponse</a></code>
- <code><a href="./src/resources/event-evolution/event-evolution.ts">EventEvolutionTupleResponse</a></code>

Methods:

- <code title="post /udl/eventevolution">client.eventEvolution.<a href="./src/resources/event-evolution/event-evolution.ts">create</a>({ ...params }) -> void</code>
- <code title="get /udl/eventevolution/{id}">client.eventEvolution.<a href="./src/resources/event-evolution/event-evolution.ts">retrieve</a>(id) -> EventEvolutionFull</code>
- <code title="get /udl/eventevolution">client.eventEvolution.<a href="./src/resources/event-evolution/event-evolution.ts">list</a>({ ...params }) -> EventEvolutionListResponse</code>
- <code title="get /udl/eventevolution/count">client.eventEvolution.<a href="./src/resources/event-evolution/event-evolution.ts">count</a>({ ...params }) -> string</code>
- <code title="post /udl/eventevolution/createBulk">client.eventEvolution.<a href="./src/resources/event-evolution/event-evolution.ts">createBulk</a>([ ...body ]) -> void</code>
- <code title="post /filedrop/udl-eventevolution">client.eventEvolution.<a href="./src/resources/event-evolution/event-evolution.ts">createBulkV2</a>([ ...body ]) -> void</code>
- <code title="get /udl/eventevolution/queryhelp">client.eventEvolution.<a href="./src/resources/event-evolution/event-evolution.ts">queryhelp</a>() -> void</code>
- <code title="get /udl/eventevolution/tuple">client.eventEvolution.<a href="./src/resources/event-evolution/event-evolution.ts">tuple</a>({ ...params }) -> EventEvolutionTupleResponse</code>

## History

Types:

- <code><a href="./src/resources/event-evolution/history.ts">HistoryListResponse</a></code>
- <code><a href="./src/resources/event-evolution/history.ts">HistoryCountResponse</a></code>

Methods:

- <code title="get /udl/eventevolution/history">client.eventEvolution.history.<a href="./src/resources/event-evolution/history.ts">list</a>({ ...params }) -> HistoryListResponse</code>
- <code title="get /udl/eventevolution/history/aodr">client.eventEvolution.history.<a href="./src/resources/event-evolution/history.ts">aodr</a>({ ...params }) -> void</code>
- <code title="get /udl/eventevolution/history/count">client.eventEvolution.history.<a href="./src/resources/event-evolution/history.ts">count</a>({ ...params }) -> string</code>

# Flightplan

Types:

- <code><a href="./src/resources/flightplan.ts">FlightPlanAbridged</a></code>
- <code><a href="./src/resources/flightplan.ts">FlightplanListResponse</a></code>
- <code><a href="./src/resources/flightplan.ts">FlightplanCountResponse</a></code>
- <code><a href="./src/resources/flightplan.ts">FlightplanTupleResponse</a></code>

Methods:

- <code title="post /udl/flightplan">client.flightplan.<a href="./src/resources/flightplan.ts">create</a>({ ...params }) -> void</code>
- <code title="get /udl/flightplan/{id}">client.flightplan.<a href="./src/resources/flightplan.ts">retrieve</a>(id) -> FlightPlanFull</code>
- <code title="put /udl/flightplan/{id}">client.flightplan.<a href="./src/resources/flightplan.ts">update</a>(pathId, { ...params }) -> void</code>
- <code title="get /udl/flightplan">client.flightplan.<a href="./src/resources/flightplan.ts">list</a>() -> FlightplanListResponse</code>
- <code title="delete /udl/flightplan/{id}">client.flightplan.<a href="./src/resources/flightplan.ts">delete</a>(id) -> void</code>
- <code title="get /udl/flightplan/count">client.flightplan.<a href="./src/resources/flightplan.ts">count</a>() -> string</code>
- <code title="post /filedrop/udl-flightplan">client.flightplan.<a href="./src/resources/flightplan.ts">createBulkV2</a>([ ...body ]) -> void</code>
- <code title="get /udl/flightplan/queryhelp">client.flightplan.<a href="./src/resources/flightplan.ts">queryhelp</a>() -> void</code>
- <code title="get /udl/flightplan/tuple">client.flightplan.<a href="./src/resources/flightplan.ts">tuple</a>({ ...params }) -> FlightplanTupleResponse</code>

# Geostatus

Types:

- <code><a href="./src/resources/geostatus.ts">GeostatusListResponse</a></code>
- <code><a href="./src/resources/geostatus.ts">GeostatusCountResponse</a></code>
- <code><a href="./src/resources/geostatus.ts">GeostatusTupleResponse</a></code>

Methods:

- <code title="post /udl/geostatus">client.geostatus.<a href="./src/resources/geostatus.ts">create</a>({ ...params }) -> void</code>
- <code title="get /udl/geostatus">client.geostatus.<a href="./src/resources/geostatus.ts">list</a>({ ...params }) -> GeostatusListResponse</code>
- <code title="get /udl/geostatus/count">client.geostatus.<a href="./src/resources/geostatus.ts">count</a>({ ...params }) -> string</code>
- <code title="post /udl/geostatus/createBulk">client.geostatus.<a href="./src/resources/geostatus.ts">createBulk</a>([ ...body ]) -> void</code>
- <code title="get /udl/geostatus/{id}">client.geostatus.<a href="./src/resources/geostatus.ts">get</a>(id) -> GeoStatusFull</code>
- <code title="get /udl/geostatus/queryhelp">client.geostatus.<a href="./src/resources/geostatus.ts">queryhelp</a>() -> void</code>
- <code title="get /udl/geostatus/tuple">client.geostatus.<a href="./src/resources/geostatus.ts">tuple</a>({ ...params }) -> GeostatusTupleResponse</code>

# Gnssobservationset

Types:

- <code><a href="./src/resources/gnssobservationset.ts">GnssobservationsetListResponse</a></code>
- <code><a href="./src/resources/gnssobservationset.ts">GnssobservationsetCountResponse</a></code>
- <code><a href="./src/resources/gnssobservationset.ts">GnssobservationsetTupleResponse</a></code>

Methods:

- <code title="get /udl/gnssobservationset">client.gnssobservationset.<a href="./src/resources/gnssobservationset.ts">list</a>({ ...params }) -> GnssobservationsetListResponse</code>
- <code title="get /udl/gnssobservationset/count">client.gnssobservationset.<a href="./src/resources/gnssobservationset.ts">count</a>({ ...params }) -> string</code>
- <code title="post /udl/gnssobservationset/createBulk">client.gnssobservationset.<a href="./src/resources/gnssobservationset.ts">createBulk</a>([ ...body ]) -> void</code>
- <code title="post /filedrop/udl-gnssobset">client.gnssobservationset.<a href="./src/resources/gnssobservationset.ts">createBulkV2</a>([ ...body ]) -> void</code>
- <code title="get /udl/gnssobservationset/queryhelp">client.gnssobservationset.<a href="./src/resources/gnssobservationset.ts">queryhelp</a>() -> void</code>
- <code title="get /udl/gnssobservationset/tuple">client.gnssobservationset.<a href="./src/resources/gnssobservationset.ts">tuple</a>({ ...params }) -> GnssobservationsetTupleResponse</code>

# Gnssrawif

Types:

- <code><a href="./src/resources/gnssrawif.ts">GnssrawifListResponse</a></code>
- <code><a href="./src/resources/gnssrawif.ts">GnssrawifCountResponse</a></code>
- <code><a href="./src/resources/gnssrawif.ts">GnssrawifTupleResponse</a></code>

Methods:

- <code title="get /udl/gnssrawif">client.gnssrawif.<a href="./src/resources/gnssrawif.ts">list</a>({ ...params }) -> GnssrawifListResponse</code>
- <code title="get /udl/gnssrawif/count">client.gnssrawif.<a href="./src/resources/gnssrawif.ts">count</a>({ ...params }) -> string</code>
- <code title="get /udl/gnssrawif/getFile/{id}">client.gnssrawif.<a href="./src/resources/gnssrawif.ts">fileGet</a>(id) -> Response</code>
- <code title="get /udl/gnssrawif/{id}">client.gnssrawif.<a href="./src/resources/gnssrawif.ts">get</a>(id) -> GnssRawIfFull</code>
- <code title="get /udl/gnssrawif/queryhelp">client.gnssrawif.<a href="./src/resources/gnssrawif.ts">queryhelp</a>() -> void</code>
- <code title="get /udl/gnssrawif/tuple">client.gnssrawif.<a href="./src/resources/gnssrawif.ts">tuple</a>({ ...params }) -> GnssrawifTupleResponse</code>
- <code title="post /filedrop/udl-gnssrawif">client.gnssrawif.<a href="./src/resources/gnssrawif.ts">uploadZip</a>({ ...params }) -> void</code>

# GroundImagery

Methods:

- <code title="get /udl/groundimagery/history/aodr">client.groundImagery.<a href="./src/resources/ground-imagery/ground-imagery.ts">historyAodr</a>({ ...params }) -> void</code>
- <code title="post /filedrop/udl-groundimagery">client.groundImagery.<a href="./src/resources/ground-imagery/ground-imagery.ts">uploadZip</a>({ ...params }) -> void</code>

## History

Types:

- <code><a href="./src/resources/ground-imagery/history.ts">HistoryCountResponse</a></code>
- <code><a href="./src/resources/ground-imagery/history.ts">HistoryQueryResponse</a></code>

Methods:

- <code title="get /udl/groundimagery/history/count">client.groundImagery.history.<a href="./src/resources/ground-imagery/history.ts">count</a>({ ...params }) -> string</code>
- <code title="get /udl/groundimagery/history">client.groundImagery.history.<a href="./src/resources/ground-imagery/history.ts">query</a>({ ...params }) -> HistoryQueryResponse</code>

# Groundimagery

Types:

- <code><a href="./src/resources/groundimagery.ts">GroundimageryListResponse</a></code>
- <code><a href="./src/resources/groundimagery.ts">GroundimageryCountResponse</a></code>
- <code><a href="./src/resources/groundimagery.ts">GroundimageryTupleResponse</a></code>

Methods:

- <code title="post /udl/groundimagery">client.groundimagery.<a href="./src/resources/groundimagery.ts">create</a>({ ...params }) -> void</code>
- <code title="get /udl/groundimagery">client.groundimagery.<a href="./src/resources/groundimagery.ts">list</a>({ ...params }) -> GroundimageryListResponse</code>
- <code title="get /udl/groundimagery/count">client.groundimagery.<a href="./src/resources/groundimagery.ts">count</a>({ ...params }) -> string</code>
- <code title="get /udl/groundimagery/{id}">client.groundimagery.<a href="./src/resources/groundimagery.ts">get</a>(id) -> GroundImageryFull</code>
- <code title="get /udl/groundimagery/getFile/{id}">client.groundimagery.<a href="./src/resources/groundimagery.ts">getFile</a>(id) -> Response</code>
- <code title="get /udl/groundimagery/queryhelp">client.groundimagery.<a href="./src/resources/groundimagery.ts">queryhelp</a>() -> void</code>
- <code title="get /udl/groundimagery/tuple">client.groundimagery.<a href="./src/resources/groundimagery.ts">tuple</a>({ ...params }) -> GroundimageryTupleResponse</code>

# H3geo

Types:

- <code><a href="./src/resources/h3geo/h3geo.ts">H3geoListResponse</a></code>
- <code><a href="./src/resources/h3geo/h3geo.ts">H3geoCountResponse</a></code>
- <code><a href="./src/resources/h3geo/h3geo.ts">H3geoGetResponse</a></code>
- <code><a href="./src/resources/h3geo/h3geo.ts">H3geoTupleResponse</a></code>

Methods:

- <code title="post /udl/h3geo">client.h3geo.<a href="./src/resources/h3geo/h3geo.ts">create</a>({ ...params }) -> void</code>
- <code title="get /udl/h3geo">client.h3geo.<a href="./src/resources/h3geo/h3geo.ts">list</a>({ ...params }) -> H3geoListResponse</code>
- <code title="get /udl/h3geo/count">client.h3geo.<a href="./src/resources/h3geo/h3geo.ts">count</a>({ ...params }) -> string</code>
- <code title="get /udl/h3geo/{id}">client.h3geo.<a href="./src/resources/h3geo/h3geo.ts">get</a>(id) -> H3geoGetResponse</code>
- <code title="get /udl/h3geo/queryhelp">client.h3geo.<a href="./src/resources/h3geo/h3geo.ts">queryhelp</a>() -> void</code>
- <code title="get /udl/h3geo/tuple">client.h3geo.<a href="./src/resources/h3geo/h3geo.ts">tuple</a>({ ...params }) -> H3geoTupleResponse</code>

## History

Types:

- <code><a href="./src/resources/h3geo/history.ts">HistoryCountResponse</a></code>
- <code><a href="./src/resources/h3geo/history.ts">HistoryQueryResponse</a></code>

Methods:

- <code title="get /udl/h3geo/history/aodr">client.h3geo.history.<a href="./src/resources/h3geo/history.ts">ador</a>({ ...params }) -> void</code>
- <code title="get /udl/h3geo/history/count">client.h3geo.history.<a href="./src/resources/h3geo/history.ts">count</a>({ ...params }) -> string</code>
- <code title="get /udl/h3geo/history">client.h3geo.history.<a href="./src/resources/h3geo/history.ts">query</a>({ ...params }) -> HistoryQueryResponse</code>

# H3geohexcell

Types:

- <code><a href="./src/resources/h3geohexcell.ts">H3geohexcellListResponse</a></code>
- <code><a href="./src/resources/h3geohexcell.ts">H3geohexcellCountResponse</a></code>
- <code><a href="./src/resources/h3geohexcell.ts">H3geohexcellTupleResponse</a></code>

Methods:

- <code title="get /udl/h3geohexcell">client.h3geohexcell.<a href="./src/resources/h3geohexcell.ts">list</a>({ ...params }) -> H3geohexcellListResponse</code>
- <code title="get /udl/h3geohexcell/count">client.h3geohexcell.<a href="./src/resources/h3geohexcell.ts">count</a>({ ...params }) -> string</code>
- <code title="get /udl/h3geohexcell/queryhelp">client.h3geohexcell.<a href="./src/resources/h3geohexcell.ts">queryhelp</a>() -> void</code>
- <code title="get /udl/h3geohexcell/tuple">client.h3geohexcell.<a href="./src/resources/h3geohexcell.ts">tuple</a>({ ...params }) -> H3geohexcellTupleResponse</code>

# Hazard

Types:

- <code><a href="./src/resources/hazard/hazard.ts">HazardListResponse</a></code>
- <code><a href="./src/resources/hazard/hazard.ts">HazardCountResponse</a></code>
- <code><a href="./src/resources/hazard/hazard.ts">HazardTupleResponse</a></code>

Methods:

- <code title="post /udl/hazard">client.hazard.<a href="./src/resources/hazard/hazard.ts">create</a>({ ...params }) -> void</code>
- <code title="get /udl/hazard">client.hazard.<a href="./src/resources/hazard/hazard.ts">list</a>({ ...params }) -> HazardListResponse</code>
- <code title="get /udl/hazard/count">client.hazard.<a href="./src/resources/hazard/hazard.ts">count</a>({ ...params }) -> string</code>
- <code title="post /udl/hazard/createBulk">client.hazard.<a href="./src/resources/hazard/hazard.ts">createBulk</a>([ ...body ]) -> void</code>
- <code title="get /udl/hazard/{id}">client.hazard.<a href="./src/resources/hazard/hazard.ts">get</a>(id) -> HazardFull</code>
- <code title="get /udl/hazard/queryhelp">client.hazard.<a href="./src/resources/hazard/hazard.ts">queryhelp</a>() -> void</code>
- <code title="get /udl/hazard/tuple">client.hazard.<a href="./src/resources/hazard/hazard.ts">tuple</a>({ ...params }) -> HazardTupleResponse</code>

## History

Types:

- <code><a href="./src/resources/hazard/history.ts">HistoryCountResponse</a></code>
- <code><a href="./src/resources/hazard/history.ts">HistoryQueryResponse</a></code>

Methods:

- <code title="get /udl/hazard/history/aodr">client.hazard.history.<a href="./src/resources/hazard/history.ts">aodr</a>({ ...params }) -> void</code>
- <code title="get /udl/hazard/history/count">client.hazard.history.<a href="./src/resources/hazard/history.ts">count</a>({ ...params }) -> string</code>
- <code title="get /udl/hazard/history">client.hazard.history.<a href="./src/resources/hazard/history.ts">query</a>({ ...params }) -> HistoryQueryResponse</code>

# Ionoobservation

Types:

- <code><a href="./src/resources/ionoobservation.ts">IonoobservationListResponse</a></code>
- <code><a href="./src/resources/ionoobservation.ts">IonoobservationCountResponse</a></code>
- <code><a href="./src/resources/ionoobservation.ts">IonoobservationTupleResponse</a></code>

Methods:

- <code title="get /udl/ionoobservation">client.ionoobservation.<a href="./src/resources/ionoobservation.ts">list</a>({ ...params }) -> IonoobservationListResponse</code>
- <code title="get /udl/ionoobservation/count">client.ionoobservation.<a href="./src/resources/ionoobservation.ts">count</a>({ ...params }) -> string</code>
- <code title="post /udl/ionoobservation/createBulk">client.ionoobservation.<a href="./src/resources/ionoobservation.ts">createBulk</a>([ ...body ]) -> void</code>
- <code title="post /filedrop/udl-ionoobs">client.ionoobservation.<a href="./src/resources/ionoobservation.ts">createBulkV2</a>([ ...body ]) -> void</code>
- <code title="get /udl/ionoobservation/queryhelp">client.ionoobservation.<a href="./src/resources/ionoobservation.ts">queryhelp</a>() -> void</code>
- <code title="get /udl/ionoobservation/tuple">client.ionoobservation.<a href="./src/resources/ionoobservation.ts">tuple</a>({ ...params }) -> IonoobservationTupleResponse</code>

# Ir

Types:

- <code><a href="./src/resources/ir.ts">IrListResponse</a></code>
- <code><a href="./src/resources/ir.ts">IrCountResponse</a></code>
- <code><a href="./src/resources/ir.ts">IrGetResponse</a></code>
- <code><a href="./src/resources/ir.ts">IrTupleResponse</a></code>

Methods:

- <code title="post /udl/ir">client.ir.<a href="./src/resources/ir.ts">create</a>({ ...params }) -> void</code>
- <code title="put /udl/ir/{id}">client.ir.<a href="./src/resources/ir.ts">update</a>(pathId, { ...params }) -> void</code>
- <code title="get /udl/ir">client.ir.<a href="./src/resources/ir.ts">list</a>() -> IrListResponse</code>
- <code title="delete /udl/ir/{id}">client.ir.<a href="./src/resources/ir.ts">delete</a>(id) -> void</code>
- <code title="get /udl/ir/count">client.ir.<a href="./src/resources/ir.ts">count</a>() -> string</code>
- <code title="get /udl/ir/{id}">client.ir.<a href="./src/resources/ir.ts">get</a>(id) -> IrGetResponse</code>
- <code title="get /udl/ir/queryhelp">client.ir.<a href="./src/resources/ir.ts">queryhelp</a>() -> void</code>
- <code title="get /udl/ir/tuple">client.ir.<a href="./src/resources/ir.ts">tuple</a>({ ...params }) -> IrTupleResponse</code>

# IsrCollections

Types:

- <code><a href="./src/resources/isr-collections/isr-collections.ts">IsrCollectionListResponse</a></code>
- <code><a href="./src/resources/isr-collections/isr-collections.ts">IsrCollectionCountResponse</a></code>
- <code><a href="./src/resources/isr-collections/isr-collections.ts">IsrCollectionTupleResponse</a></code>

Methods:

- <code title="get /udl/isrcollection">client.isrCollections.<a href="./src/resources/isr-collections/isr-collections.ts">list</a>({ ...params }) -> IsrCollectionListResponse</code>
- <code title="get /udl/isrcollection/count">client.isrCollections.<a href="./src/resources/isr-collections/isr-collections.ts">count</a>({ ...params }) -> string</code>
- <code title="post /udl/isrcollection/createBulk">client.isrCollections.<a href="./src/resources/isr-collections/isr-collections.ts">createBulk</a>([ ...body ]) -> void</code>
- <code title="post /filedrop/udl-isrcollection">client.isrCollections.<a href="./src/resources/isr-collections/isr-collections.ts">createBulkV2</a>([ ...body ]) -> void</code>
- <code title="get /udl/isrcollection/queryhelp">client.isrCollections.<a href="./src/resources/isr-collections/isr-collections.ts">queryhelp</a>() -> void</code>
- <code title="get /udl/isrcollection/tuple">client.isrCollections.<a href="./src/resources/isr-collections/isr-collections.ts">tuple</a>({ ...params }) -> IsrCollectionTupleResponse</code>

## History

Types:

- <code><a href="./src/resources/isr-collections/history.ts">HistoryListResponse</a></code>
- <code><a href="./src/resources/isr-collections/history.ts">HistoryCountResponse</a></code>

Methods:

- <code title="get /udl/isrcollection/history">client.isrCollections.history.<a href="./src/resources/isr-collections/history.ts">list</a>({ ...params }) -> HistoryListResponse</code>
- <code title="get /udl/isrcollection/history/aodr">client.isrCollections.history.<a href="./src/resources/isr-collections/history.ts">aodr</a>({ ...params }) -> void</code>
- <code title="get /udl/isrcollection/history/count">client.isrCollections.history.<a href="./src/resources/isr-collections/history.ts">count</a>({ ...params }) -> string</code>

# Item

Types:

- <code><a href="./src/resources/item.ts">ItemListResponse</a></code>
- <code><a href="./src/resources/item.ts">ItemCountResponse</a></code>
- <code><a href="./src/resources/item.ts">ItemGetResponse</a></code>
- <code><a href="./src/resources/item.ts">ItemTupleResponse</a></code>

Methods:

- <code title="post /udl/item">client.item.<a href="./src/resources/item.ts">create</a>({ ...params }) -> void</code>
- <code title="put /udl/item/{id}">client.item.<a href="./src/resources/item.ts">update</a>(pathId, { ...params }) -> void</code>
- <code title="get /udl/item">client.item.<a href="./src/resources/item.ts">list</a>() -> ItemListResponse</code>
- <code title="delete /udl/item/{id}">client.item.<a href="./src/resources/item.ts">delete</a>(id) -> void</code>
- <code title="get /udl/item/count">client.item.<a href="./src/resources/item.ts">count</a>() -> string</code>
- <code title="post /filedrop/udl-item">client.item.<a href="./src/resources/item.ts">createBulkV2</a>([ ...body ]) -> void</code>
- <code title="get /udl/item/{id}">client.item.<a href="./src/resources/item.ts">get</a>(id) -> ItemGetResponse</code>
- <code title="get /udl/item/queryhelp">client.item.<a href="./src/resources/item.ts">queryhelp</a>() -> void</code>
- <code title="get /udl/item/tuple">client.item.<a href="./src/resources/item.ts">tuple</a>({ ...params }) -> ItemTupleResponse</code>

# ItemTrackings

Types:

- <code><a href="./src/resources/item-trackings/item-trackings.ts">ItemTrackingListResponse</a></code>
- <code><a href="./src/resources/item-trackings/item-trackings.ts">ItemTrackingCountResponse</a></code>
- <code><a href="./src/resources/item-trackings/item-trackings.ts">ItemTrackingTupleResponse</a></code>

Methods:

- <code title="post /udl/itemtracking">client.itemTrackings.<a href="./src/resources/item-trackings/item-trackings.ts">create</a>({ ...params }) -> void</code>
- <code title="get /udl/itemtracking">client.itemTrackings.<a href="./src/resources/item-trackings/item-trackings.ts">list</a>({ ...params }) -> ItemTrackingListResponse</code>
- <code title="delete /udl/itemtracking/{id}">client.itemTrackings.<a href="./src/resources/item-trackings/item-trackings.ts">delete</a>(id) -> void</code>
- <code title="get /udl/itemtracking/count">client.itemTrackings.<a href="./src/resources/item-trackings/item-trackings.ts">count</a>({ ...params }) -> string</code>
- <code title="post /filedrop/udl-itemtracking">client.itemTrackings.<a href="./src/resources/item-trackings/item-trackings.ts">createBulkV2</a>([ ...body ]) -> void</code>
- <code title="get /udl/itemtracking/{id}">client.itemTrackings.<a href="./src/resources/item-trackings/item-trackings.ts">get</a>(id) -> ItemTrackingFull</code>
- <code title="get /udl/itemtracking/queryhelp">client.itemTrackings.<a href="./src/resources/item-trackings/item-trackings.ts">queryhelp</a>() -> void</code>
- <code title="get /udl/itemtracking/tuple">client.itemTrackings.<a href="./src/resources/item-trackings/item-trackings.ts">tuple</a>({ ...params }) -> ItemTrackingTupleResponse</code>

## History

Types:

- <code><a href="./src/resources/item-trackings/history.ts">HistoryListResponse</a></code>
- <code><a href="./src/resources/item-trackings/history.ts">HistoryCountResponse</a></code>

Methods:

- <code title="get /udl/itemtracking/history">client.itemTrackings.history.<a href="./src/resources/item-trackings/history.ts">list</a>({ ...params }) -> HistoryListResponse</code>
- <code title="get /udl/itemtracking/history/count">client.itemTrackings.history.<a href="./src/resources/item-trackings/history.ts">count</a>({ ...params }) -> string</code>

# Launchdetection

Types:

- <code><a href="./src/resources/launchdetection.ts">LaunchdetectionListResponse</a></code>
- <code><a href="./src/resources/launchdetection.ts">LaunchdetectionCountResponse</a></code>
- <code><a href="./src/resources/launchdetection.ts">LaunchdetectionGetResponse</a></code>
- <code><a href="./src/resources/launchdetection.ts">LaunchdetectionTupleResponse</a></code>

Methods:

- <code title="post /udl/launchdetection">client.launchdetection.<a href="./src/resources/launchdetection.ts">create</a>({ ...params }) -> void</code>
- <code title="put /udl/launchdetection/{id}">client.launchdetection.<a href="./src/resources/launchdetection.ts">update</a>(pathId, { ...params }) -> void</code>
- <code title="get /udl/launchdetection">client.launchdetection.<a href="./src/resources/launchdetection.ts">list</a>() -> LaunchdetectionListResponse</code>
- <code title="delete /udl/launchdetection/{id}">client.launchdetection.<a href="./src/resources/launchdetection.ts">delete</a>(id) -> void</code>
- <code title="get /udl/launchdetection/count">client.launchdetection.<a href="./src/resources/launchdetection.ts">count</a>() -> string</code>
- <code title="get /udl/launchdetection/{id}">client.launchdetection.<a href="./src/resources/launchdetection.ts">get</a>(id) -> LaunchdetectionGetResponse</code>
- <code title="get /udl/launchdetection/queryhelp">client.launchdetection.<a href="./src/resources/launchdetection.ts">queryhelp</a>() -> void</code>
- <code title="get /udl/launchdetection/tuple">client.launchdetection.<a href="./src/resources/launchdetection.ts">tuple</a>({ ...params }) -> LaunchdetectionTupleResponse</code>

# Launchevent

Types:

- <code><a href="./src/resources/launchevent.ts">LauncheventListResponse</a></code>
- <code><a href="./src/resources/launchevent.ts">LauncheventCountResponse</a></code>
- <code><a href="./src/resources/launchevent.ts">LauncheventGetResponse</a></code>
- <code><a href="./src/resources/launchevent.ts">LauncheventTupleResponse</a></code>

Methods:

- <code title="post /udl/launchevent">client.launchevent.<a href="./src/resources/launchevent.ts">create</a>({ ...params }) -> void</code>
- <code title="get /udl/launchevent">client.launchevent.<a href="./src/resources/launchevent.ts">list</a>({ ...params }) -> LauncheventListResponse</code>
- <code title="get /udl/launchevent/count">client.launchevent.<a href="./src/resources/launchevent.ts">count</a>({ ...params }) -> string</code>
- <code title="post /udl/launchevent/createBulk">client.launchevent.<a href="./src/resources/launchevent.ts">createBulk</a>([ ...body ]) -> void</code>
- <code title="post /filedrop/udl-launchevent">client.launchevent.<a href="./src/resources/launchevent.ts">createBulkV2</a>([ ...body ]) -> void</code>
- <code title="get /udl/launchevent/{id}">client.launchevent.<a href="./src/resources/launchevent.ts">get</a>(id) -> LauncheventGetResponse</code>
- <code title="get /udl/launchevent/queryhelp">client.launchevent.<a href="./src/resources/launchevent.ts">queryhelp</a>() -> void</code>
- <code title="get /udl/launchevent/tuple">client.launchevent.<a href="./src/resources/launchevent.ts">tuple</a>({ ...params }) -> LauncheventTupleResponse</code>

# Launchsite

Types:

- <code><a href="./src/resources/launchsite.ts">LaunchsiteListResponse</a></code>
- <code><a href="./src/resources/launchsite.ts">LaunchsiteCountResponse</a></code>
- <code><a href="./src/resources/launchsite.ts">LaunchsiteGetResponse</a></code>
- <code><a href="./src/resources/launchsite.ts">LaunchsiteTupleResponse</a></code>

Methods:

- <code title="post /udl/launchsite">client.launchsite.<a href="./src/resources/launchsite.ts">create</a>({ ...params }) -> void</code>
- <code title="put /udl/launchsite/{id}">client.launchsite.<a href="./src/resources/launchsite.ts">update</a>(pathId, { ...params }) -> void</code>
- <code title="get /udl/launchsite">client.launchsite.<a href="./src/resources/launchsite.ts">list</a>() -> LaunchsiteListResponse</code>
- <code title="delete /udl/launchsite/{id}">client.launchsite.<a href="./src/resources/launchsite.ts">delete</a>(id) -> void</code>
- <code title="get /udl/launchsite/count">client.launchsite.<a href="./src/resources/launchsite.ts">count</a>() -> string</code>
- <code title="get /udl/launchsite/{id}">client.launchsite.<a href="./src/resources/launchsite.ts">get</a>(id) -> LaunchsiteGetResponse</code>
- <code title="get /udl/launchsite/queryhelp">client.launchsite.<a href="./src/resources/launchsite.ts">queryhelp</a>() -> void</code>
- <code title="get /udl/launchsite/tuple">client.launchsite.<a href="./src/resources/launchsite.ts">tuple</a>({ ...params }) -> LaunchsiteTupleResponse</code>

# Launchsitedetails

Types:

- <code><a href="./src/resources/launchsitedetails.ts">LaunchsitedetailListResponse</a></code>
- <code><a href="./src/resources/launchsitedetails.ts">LaunchsitedetailFindBySourceResponse</a></code>
- <code><a href="./src/resources/launchsitedetails.ts">LaunchsitedetailGetResponse</a></code>

Methods:

- <code title="post /udl/launchsitedetails">client.launchsitedetails.<a href="./src/resources/launchsitedetails.ts">create</a>({ ...params }) -> void</code>
- <code title="put /udl/launchsitedetails/{id}">client.launchsitedetails.<a href="./src/resources/launchsitedetails.ts">update</a>(pathId, { ...params }) -> void</code>
- <code title="get /udl/launchsitedetails">client.launchsitedetails.<a href="./src/resources/launchsitedetails.ts">list</a>() -> LaunchsitedetailListResponse</code>
- <code title="delete /udl/launchsitedetails/{id}">client.launchsitedetails.<a href="./src/resources/launchsitedetails.ts">delete</a>(id) -> void</code>
- <code title="get /udl/launchsitedetails/findBySource">client.launchsitedetails.<a href="./src/resources/launchsitedetails.ts">findBySource</a>({ ...params }) -> LaunchsitedetailFindBySourceResponse</code>
- <code title="get /udl/launchsitedetails/{id}">client.launchsitedetails.<a href="./src/resources/launchsitedetails.ts">get</a>(id) -> LaunchsitedetailGetResponse</code>

# Launchvehicle

Types:

- <code><a href="./src/resources/launchvehicle.ts">LaunchvehicleListResponse</a></code>
- <code><a href="./src/resources/launchvehicle.ts">LaunchvehicleCountResponse</a></code>
- <code><a href="./src/resources/launchvehicle.ts">LaunchvehicleGetResponse</a></code>
- <code><a href="./src/resources/launchvehicle.ts">LaunchvehicleTupleResponse</a></code>

Methods:

- <code title="post /udl/launchvehicle">client.launchvehicle.<a href="./src/resources/launchvehicle.ts">create</a>({ ...params }) -> void</code>
- <code title="put /udl/launchvehicle/{id}">client.launchvehicle.<a href="./src/resources/launchvehicle.ts">update</a>(pathId, { ...params }) -> void</code>
- <code title="get /udl/launchvehicle">client.launchvehicle.<a href="./src/resources/launchvehicle.ts">list</a>() -> LaunchvehicleListResponse</code>
- <code title="delete /udl/launchvehicle/{id}">client.launchvehicle.<a href="./src/resources/launchvehicle.ts">delete</a>(id) -> void</code>
- <code title="get /udl/launchvehicle/count">client.launchvehicle.<a href="./src/resources/launchvehicle.ts">count</a>() -> string</code>
- <code title="get /udl/launchvehicle/{id}">client.launchvehicle.<a href="./src/resources/launchvehicle.ts">get</a>(id) -> LaunchvehicleGetResponse</code>
- <code title="get /udl/launchvehicle/queryhelp">client.launchvehicle.<a href="./src/resources/launchvehicle.ts">queryhelp</a>() -> void</code>
- <code title="get /udl/launchvehicle/tuple">client.launchvehicle.<a href="./src/resources/launchvehicle.ts">tuple</a>({ ...params }) -> LaunchvehicleTupleResponse</code>

# Launchvehicledetails

Types:

- <code><a href="./src/resources/launchvehicledetails.ts">LaunchvehicledetailListResponse</a></code>
- <code><a href="./src/resources/launchvehicledetails.ts">LaunchvehicledetailGetResponse</a></code>

Methods:

- <code title="post /udl/launchvehicledetails">client.launchvehicledetails.<a href="./src/resources/launchvehicledetails.ts">create</a>({ ...params }) -> void</code>
- <code title="put /udl/launchvehicledetails/{id}">client.launchvehicledetails.<a href="./src/resources/launchvehicledetails.ts">update</a>(pathId, { ...params }) -> void</code>
- <code title="get /udl/launchvehicledetails">client.launchvehicledetails.<a href="./src/resources/launchvehicledetails.ts">list</a>() -> LaunchvehicledetailListResponse</code>
- <code title="delete /udl/launchvehicledetails/{id}">client.launchvehicledetails.<a href="./src/resources/launchvehicledetails.ts">delete</a>(id) -> void</code>
- <code title="get /udl/launchvehicledetails/{id}">client.launchvehicledetails.<a href="./src/resources/launchvehicledetails.ts">get</a>(id) -> LaunchvehicledetailGetResponse</code>

# LinkStatus

Types:

- <code><a href="./src/resources/link-status/link-status.ts">LinkStatusListResponse</a></code>
- <code><a href="./src/resources/link-status/link-status.ts">LinkStatusCountResponse</a></code>
- <code><a href="./src/resources/link-status/link-status.ts">LinkStatusTupleResponse</a></code>

Methods:

- <code title="post /udl/linkstatus">client.linkStatus.<a href="./src/resources/link-status/link-status.ts">create</a>({ ...params }) -> void</code>
- <code title="get /udl/linkstatus">client.linkStatus.<a href="./src/resources/link-status/link-status.ts">list</a>({ ...params }) -> LinkStatusListResponse</code>
- <code title="get /udl/linkstatus/count">client.linkStatus.<a href="./src/resources/link-status/link-status.ts">count</a>({ ...params }) -> string</code>
- <code title="get /udl/linkstatus/{id}">client.linkStatus.<a href="./src/resources/link-status/link-status.ts">get</a>(id) -> LinkStatusFull</code>
- <code title="get /udl/linkstatus/queryhelp">client.linkStatus.<a href="./src/resources/link-status/link-status.ts">queryhelp</a>() -> void</code>
- <code title="get /udl/linkstatus/tuple">client.linkStatus.<a href="./src/resources/link-status/link-status.ts">tuple</a>({ ...params }) -> LinkStatusTupleResponse</code>

## Datalink

Types:

- <code><a href="./src/resources/link-status/datalink.ts">DatalinkIngest</a></code>
- <code><a href="./src/resources/link-status/datalink.ts">DatalinkListResponse</a></code>
- <code><a href="./src/resources/link-status/datalink.ts">DatalinkCountResponse</a></code>
- <code><a href="./src/resources/link-status/datalink.ts">DatalinkTupleResponse</a></code>

Methods:

- <code title="post /udl/datalink">client.linkStatus.datalink.<a href="./src/resources/link-status/datalink.ts">create</a>({ ...params }) -> void</code>
- <code title="get /udl/datalink">client.linkStatus.datalink.<a href="./src/resources/link-status/datalink.ts">list</a>({ ...params }) -> DatalinkListResponse</code>
- <code title="get /udl/datalink/count">client.linkStatus.datalink.<a href="./src/resources/link-status/datalink.ts">count</a>({ ...params }) -> string</code>
- <code title="post /filedrop/udl-datalink">client.linkStatus.datalink.<a href="./src/resources/link-status/datalink.ts">createBulkV2</a>([ ...body ]) -> void</code>
- <code title="get /udl/datalink/queryhelp">client.linkStatus.datalink.<a href="./src/resources/link-status/datalink.ts">queryhelp</a>() -> void</code>
- <code title="get /udl/datalink/tuple">client.linkStatus.datalink.<a href="./src/resources/link-status/datalink.ts">tuple</a>({ ...params }) -> DatalinkTupleResponse</code>

## History

Types:

- <code><a href="./src/resources/link-status/history.ts">HistoryListResponse</a></code>
- <code><a href="./src/resources/link-status/history.ts">HistoryCountResponse</a></code>

Methods:

- <code title="get /udl/linkstatus/history">client.linkStatus.history.<a href="./src/resources/link-status/history.ts">list</a>({ ...params }) -> HistoryListResponse</code>
- <code title="get /udl/linkstatus/history/aodr">client.linkStatus.history.<a href="./src/resources/link-status/history.ts">aodr</a>({ ...params }) -> void</code>
- <code title="get /udl/linkstatus/history/count">client.linkStatus.history.<a href="./src/resources/link-status/history.ts">count</a>({ ...params }) -> string</code>

# Location

Types:

- <code><a href="./src/resources/location.ts">LocationFull</a></code>
- <code><a href="./src/resources/location.ts">LocationIngest</a></code>
- <code><a href="./src/resources/location.ts">LocationListResponse</a></code>
- <code><a href="./src/resources/location.ts">LocationCountResponse</a></code>
- <code><a href="./src/resources/location.ts">LocationTupleResponse</a></code>

Methods:

- <code title="post /udl/location">client.location.<a href="./src/resources/location.ts">create</a>({ ...params }) -> void</code>
- <code title="put /udl/location/{id}">client.location.<a href="./src/resources/location.ts">update</a>(id, { ...params }) -> void</code>
- <code title="get /udl/location">client.location.<a href="./src/resources/location.ts">list</a>() -> LocationListResponse</code>
- <code title="delete /udl/location/{id}">client.location.<a href="./src/resources/location.ts">delete</a>(id) -> void</code>
- <code title="get /udl/location/count">client.location.<a href="./src/resources/location.ts">count</a>() -> string</code>
- <code title="get /udl/location/{id}">client.location.<a href="./src/resources/location.ts">get</a>(id) -> LocationFull</code>
- <code title="get /udl/location/queryhelp">client.location.<a href="./src/resources/location.ts">queryhelp</a>() -> void</code>
- <code title="get /udl/location/tuple">client.location.<a href="./src/resources/location.ts">tuple</a>({ ...params }) -> LocationTupleResponse</code>

# Logisticssupport

Types:

- <code><a href="./src/resources/logisticssupport/logisticssupport.ts">LogisticsRemarksFull</a></code>
- <code><a href="./src/resources/logisticssupport/logisticssupport.ts">LogisticssupportListResponse</a></code>
- <code><a href="./src/resources/logisticssupport/logisticssupport.ts">LogisticssupportCountResponse</a></code>
- <code><a href="./src/resources/logisticssupport/logisticssupport.ts">LogisticssupportGetResponse</a></code>
- <code><a href="./src/resources/logisticssupport/logisticssupport.ts">LogisticssupportTupleResponse</a></code>

Methods:

- <code title="post /udl/logisticssupport">client.logisticssupport.<a href="./src/resources/logisticssupport/logisticssupport.ts">create</a>({ ...params }) -> void</code>
- <code title="put /udl/logisticssupport/{id}">client.logisticssupport.<a href="./src/resources/logisticssupport/logisticssupport.ts">update</a>(pathId, { ...params }) -> void</code>
- <code title="get /udl/logisticssupport">client.logisticssupport.<a href="./src/resources/logisticssupport/logisticssupport.ts">list</a>() -> LogisticssupportListResponse</code>
- <code title="get /udl/logisticssupport/count">client.logisticssupport.<a href="./src/resources/logisticssupport/logisticssupport.ts">count</a>() -> string</code>
- <code title="post /udl/logisticssupport/createBulk">client.logisticssupport.<a href="./src/resources/logisticssupport/logisticssupport.ts">createBulk</a>([ ...body ]) -> void</code>
- <code title="post /filedrop/udl-logisticssupport">client.logisticssupport.<a href="./src/resources/logisticssupport/logisticssupport.ts">createBulkV2</a>([ ...body ]) -> void</code>
- <code title="get /udl/logisticssupport/{id}">client.logisticssupport.<a href="./src/resources/logisticssupport/logisticssupport.ts">get</a>(id) -> LogisticssupportGetResponse</code>
- <code title="get /udl/logisticssupport/queryhelp">client.logisticssupport.<a href="./src/resources/logisticssupport/logisticssupport.ts">queryhelp</a>() -> void</code>
- <code title="get /udl/logisticssupport/tuple">client.logisticssupport.<a href="./src/resources/logisticssupport/logisticssupport.ts">tuple</a>({ ...params }) -> LogisticssupportTupleResponse</code>

## History

Types:

- <code><a href="./src/resources/logisticssupport/history.ts">HistoryListResponse</a></code>
- <code><a href="./src/resources/logisticssupport/history.ts">HistoryCountResponse</a></code>

Methods:

- <code title="get /udl/logisticssupport/history">client.logisticssupport.history.<a href="./src/resources/logisticssupport/history.ts">list</a>({ ...params }) -> HistoryListResponse</code>
- <code title="get /udl/logisticssupport/history/aodr">client.logisticssupport.history.<a href="./src/resources/logisticssupport/history.ts">aodr</a>({ ...params }) -> void</code>
- <code title="get /udl/logisticssupport/history/count">client.logisticssupport.history.<a href="./src/resources/logisticssupport/history.ts">count</a>() -> string</code>

# Maneuvers

Types:

- <code><a href="./src/resources/maneuvers/maneuvers.ts">ManeuverListResponse</a></code>
- <code><a href="./src/resources/maneuvers/maneuvers.ts">ManeuverCountResponse</a></code>
- <code><a href="./src/resources/maneuvers/maneuvers.ts">ManeuverTupleResponse</a></code>

Methods:

- <code title="post /udl/maneuver">client.maneuvers.<a href="./src/resources/maneuvers/maneuvers.ts">create</a>({ ...params }) -> void</code>
- <code title="get /udl/maneuver">client.maneuvers.<a href="./src/resources/maneuvers/maneuvers.ts">list</a>({ ...params }) -> ManeuverListResponse</code>
- <code title="get /udl/maneuver/count">client.maneuvers.<a href="./src/resources/maneuvers/maneuvers.ts">count</a>({ ...params }) -> string</code>
- <code title="post /udl/maneuver/createBulk">client.maneuvers.<a href="./src/resources/maneuvers/maneuvers.ts">createBulk</a>([ ...body ]) -> void</code>
- <code title="post /filedrop/udl-maneuver">client.maneuvers.<a href="./src/resources/maneuvers/maneuvers.ts">createBulkV2</a>([ ...body ]) -> void</code>
- <code title="get /udl/maneuver/{id}">client.maneuvers.<a href="./src/resources/maneuvers/maneuvers.ts">get</a>(id) -> ManeuverFull</code>
- <code title="get /udl/maneuver/queryhelp">client.maneuvers.<a href="./src/resources/maneuvers/maneuvers.ts">queryhelp</a>() -> void</code>
- <code title="get /udl/maneuver/tuple">client.maneuvers.<a href="./src/resources/maneuvers/maneuvers.ts">tuple</a>({ ...params }) -> ManeuverTupleResponse</code>

## History

Types:

- <code><a href="./src/resources/maneuvers/history.ts">HistoryListResponse</a></code>
- <code><a href="./src/resources/maneuvers/history.ts">HistoryCountResponse</a></code>

Methods:

- <code title="get /udl/maneuver/history">client.maneuvers.history.<a href="./src/resources/maneuvers/history.ts">list</a>({ ...params }) -> HistoryListResponse</code>
- <code title="get /udl/maneuver/history/aodr">client.maneuvers.history.<a href="./src/resources/maneuvers/history.ts">aodr</a>({ ...params }) -> void</code>
- <code title="get /udl/maneuver/history/count">client.maneuvers.history.<a href="./src/resources/maneuvers/history.ts">count</a>({ ...params }) -> string</code>

# Manifold

Types:

- <code><a href="./src/resources/manifold.ts">ManifoldListResponse</a></code>
- <code><a href="./src/resources/manifold.ts">ManifoldCountResponse</a></code>
- <code><a href="./src/resources/manifold.ts">ManifoldGetResponse</a></code>
- <code><a href="./src/resources/manifold.ts">ManifoldTupleResponse</a></code>

Methods:

- <code title="post /udl/manifold">client.manifold.<a href="./src/resources/manifold.ts">create</a>({ ...params }) -> void</code>
- <code title="put /udl/manifold/{id}">client.manifold.<a href="./src/resources/manifold.ts">update</a>(pathId, { ...params }) -> void</code>
- <code title="get /udl/manifold">client.manifold.<a href="./src/resources/manifold.ts">list</a>() -> ManifoldListResponse</code>
- <code title="delete /udl/manifold/{id}">client.manifold.<a href="./src/resources/manifold.ts">delete</a>(id) -> void</code>
- <code title="get /udl/manifold/count">client.manifold.<a href="./src/resources/manifold.ts">count</a>() -> string</code>
- <code title="post /udl/manifold/createBulk">client.manifold.<a href="./src/resources/manifold.ts">createBulk</a>([ ...body ]) -> void</code>
- <code title="get /udl/manifold/{id}">client.manifold.<a href="./src/resources/manifold.ts">get</a>(id) -> ManifoldGetResponse</code>
- <code title="get /udl/manifold/queryhelp">client.manifold.<a href="./src/resources/manifold.ts">queryhelp</a>() -> void</code>
- <code title="get /udl/manifold/tuple">client.manifold.<a href="./src/resources/manifold.ts">tuple</a>({ ...params }) -> ManifoldTupleResponse</code>

# Manifoldelset

Types:

- <code><a href="./src/resources/manifoldelset.ts">ManifoldelsetListResponse</a></code>
- <code><a href="./src/resources/manifoldelset.ts">ManifoldelsetCountResponse</a></code>
- <code><a href="./src/resources/manifoldelset.ts">ManifoldelsetGetResponse</a></code>
- <code><a href="./src/resources/manifoldelset.ts">ManifoldelsetTupleResponse</a></code>

Methods:

- <code title="post /udl/manifoldelset">client.manifoldelset.<a href="./src/resources/manifoldelset.ts">create</a>({ ...params }) -> void</code>
- <code title="put /udl/manifoldelset/{id}">client.manifoldelset.<a href="./src/resources/manifoldelset.ts">update</a>(pathId, { ...params }) -> void</code>
- <code title="get /udl/manifoldelset">client.manifoldelset.<a href="./src/resources/manifoldelset.ts">list</a>({ ...params }) -> ManifoldelsetListResponse</code>
- <code title="delete /udl/manifoldelset/{id}">client.manifoldelset.<a href="./src/resources/manifoldelset.ts">delete</a>(id) -> void</code>
- <code title="get /udl/manifoldelset/count">client.manifoldelset.<a href="./src/resources/manifoldelset.ts">count</a>({ ...params }) -> string</code>
- <code title="post /udl/manifoldelset/createBulk">client.manifoldelset.<a href="./src/resources/manifoldelset.ts">createBulk</a>([ ...body ]) -> void</code>
- <code title="get /udl/manifoldelset/{id}">client.manifoldelset.<a href="./src/resources/manifoldelset.ts">get</a>(id) -> ManifoldelsetGetResponse</code>
- <code title="get /udl/manifoldelset/queryhelp">client.manifoldelset.<a href="./src/resources/manifoldelset.ts">queryhelp</a>() -> void</code>
- <code title="get /udl/manifoldelset/tuple">client.manifoldelset.<a href="./src/resources/manifoldelset.ts">tuple</a>({ ...params }) -> ManifoldelsetTupleResponse</code>

# MissileTracks

Types:

- <code><a href="./src/resources/missile-tracks/missile-tracks.ts">MissileTrackListResponse</a></code>
- <code><a href="./src/resources/missile-tracks/missile-tracks.ts">MissileTrackCountResponse</a></code>
- <code><a href="./src/resources/missile-tracks/missile-tracks.ts">MissileTrackTupleResponse</a></code>

Methods:

- <code title="get /udl/missiletrack">client.missileTracks.<a href="./src/resources/missile-tracks/missile-tracks.ts">list</a>({ ...params }) -> MissileTrackListResponse</code>
- <code title="get /udl/missiletrack/count">client.missileTracks.<a href="./src/resources/missile-tracks/missile-tracks.ts">count</a>({ ...params }) -> string</code>
- <code title="post /udl/missiletrack/createBulk">client.missileTracks.<a href="./src/resources/missile-tracks/missile-tracks.ts">createBulk</a>([ ...body ]) -> void</code>
- <code title="post /filedrop/udl-missiletrack">client.missileTracks.<a href="./src/resources/missile-tracks/missile-tracks.ts">createBulkV2</a>([ ...body ]) -> void</code>
- <code title="get /udl/missiletrack/queryhelp">client.missileTracks.<a href="./src/resources/missile-tracks/missile-tracks.ts">queryhelp</a>() -> void</code>
- <code title="get /udl/missiletrack/tuple">client.missileTracks.<a href="./src/resources/missile-tracks/missile-tracks.ts">tuple</a>({ ...params }) -> MissileTrackTupleResponse</code>

## History

Types:

- <code><a href="./src/resources/missile-tracks/history.ts">HistoryCountResponse</a></code>
- <code><a href="./src/resources/missile-tracks/history.ts">HistoryQueryResponse</a></code>

Methods:

- <code title="get /udl/missiletrack/history/aodr">client.missileTracks.history.<a href="./src/resources/missile-tracks/history.ts">aodr</a>({ ...params }) -> void</code>
- <code title="get /udl/missiletrack/history/count">client.missileTracks.history.<a href="./src/resources/missile-tracks/history.ts">count</a>({ ...params }) -> string</code>
- <code title="get /udl/missiletrack/history">client.missileTracks.history.<a href="./src/resources/missile-tracks/history.ts">query</a>({ ...params }) -> HistoryQueryResponse</code>

# Missionassignment

Types:

- <code><a href="./src/resources/missionassignment/missionassignment.ts">MissionassignmentListResponse</a></code>
- <code><a href="./src/resources/missionassignment/missionassignment.ts">MissionassignmentCountResponse</a></code>
- <code><a href="./src/resources/missionassignment/missionassignment.ts">MissionassignmentTupleResponse</a></code>

Methods:

- <code title="post /udl/missionassignment">client.missionassignment.<a href="./src/resources/missionassignment/missionassignment.ts">create</a>({ ...params }) -> void</code>
- <code title="put /udl/missionassignment/{id}">client.missionassignment.<a href="./src/resources/missionassignment/missionassignment.ts">update</a>(pathId, { ...params }) -> void</code>
- <code title="get /udl/missionassignment">client.missionassignment.<a href="./src/resources/missionassignment/missionassignment.ts">list</a>({ ...params }) -> MissionassignmentListResponse</code>
- <code title="delete /udl/missionassignment/{id}">client.missionassignment.<a href="./src/resources/missionassignment/missionassignment.ts">delete</a>(id) -> void</code>
- <code title="get /udl/missionassignment/count">client.missionassignment.<a href="./src/resources/missionassignment/missionassignment.ts">count</a>({ ...params }) -> string</code>
- <code title="post /udl/missionassignment/createBulk">client.missionassignment.<a href="./src/resources/missionassignment/missionassignment.ts">createBulk</a>([ ...body ]) -> void</code>
- <code title="get /udl/missionassignment/{id}">client.missionassignment.<a href="./src/resources/missionassignment/missionassignment.ts">get</a>(id) -> MissionAssignmentFull</code>
- <code title="get /udl/missionassignment/queryhelp">client.missionassignment.<a href="./src/resources/missionassignment/missionassignment.ts">queryhelp</a>() -> void</code>
- <code title="get /udl/missionassignment/tuple">client.missionassignment.<a href="./src/resources/missionassignment/missionassignment.ts">tuple</a>({ ...params }) -> MissionassignmentTupleResponse</code>

## History

Types:

- <code><a href="./src/resources/missionassignment/history.ts">HistoryCountResponse</a></code>
- <code><a href="./src/resources/missionassignment/history.ts">HistoryQueryResponse</a></code>

Methods:

- <code title="get /udl/missionassignment/history/aodr">client.missionassignment.history.<a href="./src/resources/missionassignment/history.ts">aodr</a>({ ...params }) -> void</code>
- <code title="get /udl/missionassignment/history/count">client.missionassignment.history.<a href="./src/resources/missionassignment/history.ts">count</a>({ ...params }) -> string</code>
- <code title="get /udl/missionassignment/history">client.missionassignment.history.<a href="./src/resources/missionassignment/history.ts">query</a>({ ...params }) -> HistoryQueryResponse</code>

# Monoradar

Types:

- <code><a href="./src/resources/monoradar.ts">MonoradarListResponse</a></code>
- <code><a href="./src/resources/monoradar.ts">MonoradarCountResponse</a></code>
- <code><a href="./src/resources/monoradar.ts">MonoradarTupleResponse</a></code>

Methods:

- <code title="get /udl/monoradar">client.monoradar.<a href="./src/resources/monoradar.ts">list</a>({ ...params }) -> MonoradarListResponse</code>
- <code title="get /udl/monoradar/count">client.monoradar.<a href="./src/resources/monoradar.ts">count</a>({ ...params }) -> string</code>
- <code title="post /udl/monoradar/createBulk">client.monoradar.<a href="./src/resources/monoradar.ts">createBulk</a>([ ...body ]) -> void</code>
- <code title="get /udl/monoradar/queryhelp">client.monoradar.<a href="./src/resources/monoradar.ts">queryhelp</a>() -> void</code>
- <code title="get /udl/monoradar/tuple">client.monoradar.<a href="./src/resources/monoradar.ts">tuple</a>({ ...params }) -> MonoradarTupleResponse</code>

# Mti

Types:

- <code><a href="./src/resources/mti.ts">MtiListResponse</a></code>
- <code><a href="./src/resources/mti.ts">MtiCountResponse</a></code>
- <code><a href="./src/resources/mti.ts">MtiTupleResponse</a></code>

Methods:

- <code title="get /udl/mti">client.mti.<a href="./src/resources/mti.ts">list</a>({ ...params }) -> MtiListResponse</code>
- <code title="get /udl/mti/count">client.mti.<a href="./src/resources/mti.ts">count</a>({ ...params }) -> string</code>
- <code title="post /udl/mti/createBulk">client.mti.<a href="./src/resources/mti.ts">createBulk</a>([ ...body ]) -> void</code>
- <code title="post /filedrop/udl-mti">client.mti.<a href="./src/resources/mti.ts">createBulkV2</a>([ ...body ]) -> void</code>
- <code title="get /udl/mti/queryhelp">client.mti.<a href="./src/resources/mti.ts">queryhelp</a>() -> void</code>
- <code title="get /udl/mti/tuple">client.mti.<a href="./src/resources/mti.ts">tuple</a>({ ...params }) -> MtiTupleResponse</code>

# Navigation

Types:

- <code><a href="./src/resources/navigation.ts">NavigationListResponse</a></code>
- <code><a href="./src/resources/navigation.ts">NavigationCountResponse</a></code>
- <code><a href="./src/resources/navigation.ts">NavigationGetResponse</a></code>
- <code><a href="./src/resources/navigation.ts">NavigationTupleResponse</a></code>

Methods:

- <code title="post /udl/navigation">client.navigation.<a href="./src/resources/navigation.ts">create</a>({ ...params }) -> void</code>
- <code title="put /udl/navigation/{id}">client.navigation.<a href="./src/resources/navigation.ts">update</a>(pathId, { ...params }) -> void</code>
- <code title="get /udl/navigation">client.navigation.<a href="./src/resources/navigation.ts">list</a>() -> NavigationListResponse</code>
- <code title="delete /udl/navigation/{id}">client.navigation.<a href="./src/resources/navigation.ts">delete</a>(id) -> void</code>
- <code title="get /udl/navigation/count">client.navigation.<a href="./src/resources/navigation.ts">count</a>() -> string</code>
- <code title="get /udl/navigation/{id}">client.navigation.<a href="./src/resources/navigation.ts">get</a>(id) -> NavigationGetResponse</code>
- <code title="get /udl/navigation/queryhelp">client.navigation.<a href="./src/resources/navigation.ts">queryhelp</a>() -> void</code>
- <code title="get /udl/navigation/tuple">client.navigation.<a href="./src/resources/navigation.ts">tuple</a>({ ...params }) -> NavigationTupleResponse</code>

# Navigationalobstruction

Types:

- <code><a href="./src/resources/navigationalobstruction.ts">NavigationalobstructionListResponse</a></code>
- <code><a href="./src/resources/navigationalobstruction.ts">NavigationalobstructionCountResponse</a></code>
- <code><a href="./src/resources/navigationalobstruction.ts">NavigationalobstructionGetResponse</a></code>
- <code><a href="./src/resources/navigationalobstruction.ts">NavigationalobstructionTupleResponse</a></code>

Methods:

- <code title="post /udl/navigationalobstruction">client.navigationalobstruction.<a href="./src/resources/navigationalobstruction.ts">create</a>({ ...params }) -> void</code>
- <code title="put /udl/navigationalobstruction/{id}">client.navigationalobstruction.<a href="./src/resources/navigationalobstruction.ts">update</a>(pathId, { ...params }) -> void</code>
- <code title="get /udl/navigationalobstruction">client.navigationalobstruction.<a href="./src/resources/navigationalobstruction.ts">list</a>({ ...params }) -> NavigationalobstructionListResponse</code>
- <code title="get /udl/navigationalobstruction/count">client.navigationalobstruction.<a href="./src/resources/navigationalobstruction.ts">count</a>({ ...params }) -> string</code>
- <code title="post /udl/navigationalobstruction/createBulk">client.navigationalobstruction.<a href="./src/resources/navigationalobstruction.ts">createBulk</a>([ ...body ]) -> void</code>
- <code title="get /udl/navigationalobstruction/{id}">client.navigationalobstruction.<a href="./src/resources/navigationalobstruction.ts">get</a>(id) -> NavigationalobstructionGetResponse</code>
- <code title="get /udl/navigationalobstruction/queryhelp">client.navigationalobstruction.<a href="./src/resources/navigationalobstruction.ts">queryhelp</a>() -> void</code>
- <code title="get /udl/navigationalobstruction/tuple">client.navigationalobstruction.<a href="./src/resources/navigationalobstruction.ts">tuple</a>({ ...params }) -> NavigationalobstructionTupleResponse</code>

# Notification

Types:

- <code><a href="./src/resources/notification.ts">NotificationListResponse</a></code>
- <code><a href="./src/resources/notification.ts">NotificationCountResponse</a></code>
- <code><a href="./src/resources/notification.ts">NotificationTupleResponse</a></code>

Methods:

- <code title="post /udl/notification">client.notification.<a href="./src/resources/notification.ts">create</a>({ ...params }) -> void</code>
- <code title="get /udl/notification">client.notification.<a href="./src/resources/notification.ts">list</a>({ ...params }) -> NotificationListResponse</code>
- <code title="get /udl/notification/count">client.notification.<a href="./src/resources/notification.ts">count</a>({ ...params }) -> string</code>
- <code title="post /udl/notification/createRaw">client.notification.<a href="./src/resources/notification.ts">createRaw</a>({ ...params }) -> void</code>
- <code title="get /udl/notification/{id}">client.notification.<a href="./src/resources/notification.ts">get</a>(id) -> NotificationFull</code>
- <code title="get /udl/notification/queryhelp">client.notification.<a href="./src/resources/notification.ts">queryhelp</a>() -> void</code>
- <code title="get /udl/notification/tuple">client.notification.<a href="./src/resources/notification.ts">tuple</a>({ ...params }) -> NotificationTupleResponse</code>

# Objectofinterest

Types:

- <code><a href="./src/resources/objectofinterest.ts">ObjectofinterestListResponse</a></code>
- <code><a href="./src/resources/objectofinterest.ts">ObjectofinterestCountResponse</a></code>
- <code><a href="./src/resources/objectofinterest.ts">ObjectofinterestGetResponse</a></code>
- <code><a href="./src/resources/objectofinterest.ts">ObjectofinterestTupleResponse</a></code>

Methods:

- <code title="post /udl/objectofinterest">client.objectofinterest.<a href="./src/resources/objectofinterest.ts">create</a>({ ...params }) -> void</code>
- <code title="put /udl/objectofinterest/{id}">client.objectofinterest.<a href="./src/resources/objectofinterest.ts">update</a>(pathId, { ...params }) -> void</code>
- <code title="get /udl/objectofinterest">client.objectofinterest.<a href="./src/resources/objectofinterest.ts">list</a>() -> ObjectofinterestListResponse</code>
- <code title="delete /udl/objectofinterest/{id}">client.objectofinterest.<a href="./src/resources/objectofinterest.ts">delete</a>(id) -> void</code>
- <code title="get /udl/objectofinterest/count">client.objectofinterest.<a href="./src/resources/objectofinterest.ts">count</a>() -> string</code>
- <code title="get /udl/objectofinterest/{id}">client.objectofinterest.<a href="./src/resources/objectofinterest.ts">get</a>(id) -> ObjectofinterestGetResponse</code>
- <code title="get /udl/objectofinterest/queryhelp">client.objectofinterest.<a href="./src/resources/objectofinterest.ts">queryhelp</a>() -> void</code>
- <code title="get /udl/objectofinterest/tuple">client.objectofinterest.<a href="./src/resources/objectofinterest.ts">tuple</a>({ ...params }) -> ObjectofinterestTupleResponse</code>

# Observations

## Ecpsdr

Types:

- <code><a href="./src/resources/observations/ecpsdr.ts">Ecpsdr</a></code>
- <code><a href="./src/resources/observations/ecpsdr.ts">EcpsdrAbridged</a></code>
- <code><a href="./src/resources/observations/ecpsdr.ts">EcpsdrListResponse</a></code>
- <code><a href="./src/resources/observations/ecpsdr.ts">EcpsdrCountResponse</a></code>
- <code><a href="./src/resources/observations/ecpsdr.ts">EcpsdrTupleResponse</a></code>

Methods:

- <code title="post /udl/ecpsdr">client.observations.ecpsdr.<a href="./src/resources/observations/ecpsdr.ts">create</a>({ ...params }) -> void</code>
- <code title="get /udl/ecpsdr/{id}">client.observations.ecpsdr.<a href="./src/resources/observations/ecpsdr.ts">retrieve</a>(id) -> Ecpsdr</code>
- <code title="get /udl/ecpsdr">client.observations.ecpsdr.<a href="./src/resources/observations/ecpsdr.ts">list</a>({ ...params }) -> EcpsdrListResponse</code>
- <code title="get /udl/ecpsdr/count">client.observations.ecpsdr.<a href="./src/resources/observations/ecpsdr.ts">count</a>({ ...params }) -> string</code>
- <code title="post /udl/ecpsdr/createBulk">client.observations.ecpsdr.<a href="./src/resources/observations/ecpsdr.ts">createBulk</a>([ ...body ]) -> void</code>
- <code title="get /udl/ecpsdr/queryhelp">client.observations.ecpsdr.<a href="./src/resources/observations/ecpsdr.ts">queryHelp</a>() -> void</code>
- <code title="get /udl/ecpsdr/tuple">client.observations.ecpsdr.<a href="./src/resources/observations/ecpsdr.ts">tuple</a>({ ...params }) -> EcpsdrTupleResponse</code>

## Eo

## Gnssobservations

## Monoradar

Methods:

- <code title="post /filedrop/monoradar">client.observations.monoradar.<a href="./src/resources/observations/monoradar/monoradar.ts">createBulkV2</a>([ ...body ]) -> void</code>

### History

Types:

- <code><a href="./src/resources/observations/monoradar/history.ts">HistoryCountResponse</a></code>
- <code><a href="./src/resources/observations/monoradar/history.ts">HistoryQueryResponse</a></code>

Methods:

- <code title="get /udl/monoradar/history/aodr">client.observations.monoradar.history.<a href="./src/resources/observations/monoradar/history.ts">aodr</a>({ ...params }) -> void</code>
- <code title="get /udl/monoradar/history/count">client.observations.monoradar.history.<a href="./src/resources/observations/monoradar/history.ts">count</a>({ ...params }) -> string</code>
- <code title="get /udl/monoradar/history">client.observations.monoradar.history.<a href="./src/resources/observations/monoradar/history.ts">query</a>({ ...params }) -> HistoryQueryResponse</code>

## Swir

Methods:

- <code title="post /filedrop/swir">client.observations.swir.<a href="./src/resources/observations/swir.ts">createBulkV2</a>([ ...body ]) -> void</code>

## Radarobservation

### History

Types:

- <code><a href="./src/resources/observations/radarobservation/history.ts">HistoryListResponse</a></code>
- <code><a href="./src/resources/observations/radarobservation/history.ts">HistoryCountResponse</a></code>

Methods:

- <code title="get /udl/radarobservation/history">client.observations.radarobservation.history.<a href="./src/resources/observations/radarobservation/history.ts">list</a>({ ...params }) -> HistoryListResponse</code>
- <code title="get /udl/radarobservation/history/aodr">client.observations.radarobservation.history.<a href="./src/resources/observations/radarobservation/history.ts">aodr</a>({ ...params }) -> void</code>
- <code title="get /udl/radarobservation/history/count">client.observations.radarobservation.history.<a href="./src/resources/observations/radarobservation/history.ts">count</a>({ ...params }) -> string</code>

## Rfobservation

### History

Types:

- <code><a href="./src/resources/observations/rfobservation/history.ts">HistoryListResponse</a></code>

Methods:

- <code title="get /udl/rfobservation/history">client.observations.rfobservation.history.<a href="./src/resources/observations/rfobservation/history.ts">list</a>({ ...params }) -> HistoryListResponse</code>
- <code title="get /udl/rfobservation/history/aodr">client.observations.rfobservation.history.<a href="./src/resources/observations/rfobservation/history.ts">aodr</a>({ ...params }) -> void</code>

# Onboardnavigation

Types:

- <code><a href="./src/resources/onboardnavigation.ts">OnboardnavigationListResponse</a></code>
- <code><a href="./src/resources/onboardnavigation.ts">OnboardnavigationCountResponse</a></code>
- <code><a href="./src/resources/onboardnavigation.ts">OnboardnavigationTupleResponse</a></code>

Methods:

- <code title="get /udl/onboardnavigation">client.onboardnavigation.<a href="./src/resources/onboardnavigation.ts">list</a>({ ...params }) -> OnboardnavigationListResponse</code>
- <code title="get /udl/onboardnavigation/count">client.onboardnavigation.<a href="./src/resources/onboardnavigation.ts">count</a>({ ...params }) -> string</code>
- <code title="post /udl/onboardnavigation/createBulk">client.onboardnavigation.<a href="./src/resources/onboardnavigation.ts">createBulk</a>([ ...body ]) -> void</code>
- <code title="post /filedrop/udl-onboardnavigation">client.onboardnavigation.<a href="./src/resources/onboardnavigation.ts">createBulkV2</a>([ ...body ]) -> void</code>
- <code title="get /udl/onboardnavigation/queryhelp">client.onboardnavigation.<a href="./src/resources/onboardnavigation.ts">queryhelp</a>() -> void</code>
- <code title="get /udl/onboardnavigation/tuple">client.onboardnavigation.<a href="./src/resources/onboardnavigation.ts">tuple</a>({ ...params }) -> OnboardnavigationTupleResponse</code>

# Onorbit

Types:

- <code><a href="./src/resources/onorbit/onorbit.ts">OnorbitIngest</a></code>
- <code><a href="./src/resources/onorbit/onorbit.ts">OnorbitListResponse</a></code>
- <code><a href="./src/resources/onorbit/onorbit.ts">OnorbitCountResponse</a></code>
- <code><a href="./src/resources/onorbit/onorbit.ts">OnorbitGetSignatureResponse</a></code>
- <code><a href="./src/resources/onorbit/onorbit.ts">OnorbitTupleResponse</a></code>

Methods:

- <code title="post /udl/onorbit">client.onorbit.<a href="./src/resources/onorbit/onorbit.ts">create</a>({ ...params }) -> void</code>
- <code title="put /udl/onorbit/{id}">client.onorbit.<a href="./src/resources/onorbit/onorbit.ts">update</a>(id, { ...params }) -> void</code>
- <code title="get /udl/onorbit">client.onorbit.<a href="./src/resources/onorbit/onorbit.ts">list</a>() -> OnorbitListResponse</code>
- <code title="delete /udl/onorbit/{id}">client.onorbit.<a href="./src/resources/onorbit/onorbit.ts">delete</a>(id) -> void</code>
- <code title="get /udl/onorbit/count">client.onorbit.<a href="./src/resources/onorbit/onorbit.ts">count</a>() -> string</code>
- <code title="get /udl/onorbit/{id}">client.onorbit.<a href="./src/resources/onorbit/onorbit.ts">get</a>(id) -> Onorbit</code>
- <code title="get /udl/onorbit/getSignature">client.onorbit.<a href="./src/resources/onorbit/onorbit.ts">getSignature</a>({ ...params }) -> OnorbitGetSignatureResponse</code>
- <code title="get /udl/onorbit/queryhelp">client.onorbit.<a href="./src/resources/onorbit/onorbit.ts">queryhelp</a>() -> void</code>
- <code title="get /udl/onorbit/tuple">client.onorbit.<a href="./src/resources/onorbit/onorbit.ts">tuple</a>({ ...params }) -> OnorbitTupleResponse</code>

## AntennaDetails

Types:

- <code><a href="./src/resources/onorbit/antenna-details.ts">AntennaDetailsAbridged</a></code>
- <code><a href="./src/resources/onorbit/antenna-details.ts">AntennaDetailsFull</a></code>
- <code><a href="./src/resources/onorbit/antenna-details.ts">AntennaDetailListResponse</a></code>

Methods:

- <code title="post /udl/antennadetails">client.onorbit.antennaDetails.<a href="./src/resources/onorbit/antenna-details.ts">create</a>({ ...params }) -> void</code>
- <code title="get /udl/antennadetails/{id}">client.onorbit.antennaDetails.<a href="./src/resources/onorbit/antenna-details.ts">retrieve</a>(id) -> AntennaDetailsFull</code>
- <code title="put /udl/antennadetails/{id}">client.onorbit.antennaDetails.<a href="./src/resources/onorbit/antenna-details.ts">update</a>(pathId, { ...params }) -> void</code>
- <code title="get /udl/antennadetails">client.onorbit.antennaDetails.<a href="./src/resources/onorbit/antenna-details.ts">list</a>() -> AntennaDetailListResponse</code>
- <code title="delete /udl/antennadetails/{id}">client.onorbit.antennaDetails.<a href="./src/resources/onorbit/antenna-details.ts">delete</a>(id) -> void</code>

# Onorbitantenna

Types:

- <code><a href="./src/resources/onorbitantenna.ts">OnorbitantennaListResponse</a></code>
- <code><a href="./src/resources/onorbitantenna.ts">OnorbitantennaGetResponse</a></code>

Methods:

- <code title="post /udl/onorbitantenna">client.onorbitantenna.<a href="./src/resources/onorbitantenna.ts">create</a>({ ...params }) -> void</code>
- <code title="put /udl/onorbitantenna/{id}">client.onorbitantenna.<a href="./src/resources/onorbitantenna.ts">update</a>(pathId, { ...params }) -> void</code>
- <code title="get /udl/onorbitantenna">client.onorbitantenna.<a href="./src/resources/onorbitantenna.ts">list</a>() -> OnorbitantennaListResponse</code>
- <code title="delete /udl/onorbitantenna/{id}">client.onorbitantenna.<a href="./src/resources/onorbitantenna.ts">delete</a>(id) -> void</code>
- <code title="get /udl/onorbitantenna/{id}">client.onorbitantenna.<a href="./src/resources/onorbitantenna.ts">get</a>(id) -> OnorbitantennaGetResponse</code>

# Onorbitbattery

Types:

- <code><a href="./src/resources/onorbitbattery.ts">OnorbitbatteryListResponse</a></code>
- <code><a href="./src/resources/onorbitbattery.ts">OnorbitbatteryGetResponse</a></code>

Methods:

- <code title="post /udl/onorbitbattery">client.onorbitbattery.<a href="./src/resources/onorbitbattery.ts">create</a>({ ...params }) -> void</code>
- <code title="put /udl/onorbitbattery/{id}">client.onorbitbattery.<a href="./src/resources/onorbitbattery.ts">update</a>(pathId, { ...params }) -> void</code>
- <code title="get /udl/onorbitbattery">client.onorbitbattery.<a href="./src/resources/onorbitbattery.ts">list</a>() -> OnorbitbatteryListResponse</code>
- <code title="delete /udl/onorbitbattery/{id}">client.onorbitbattery.<a href="./src/resources/onorbitbattery.ts">delete</a>(id) -> void</code>
- <code title="get /udl/onorbitbattery/{id}">client.onorbitbattery.<a href="./src/resources/onorbitbattery.ts">get</a>(id) -> OnorbitbatteryGetResponse</code>

# Onorbitdetails

Types:

- <code><a href="./src/resources/onorbitdetails.ts">OnorbitdetailListResponse</a></code>
- <code><a href="./src/resources/onorbitdetails.ts">OnorbitdetailGetResponse</a></code>

Methods:

- <code title="post /udl/onorbitdetails">client.onorbitdetails.<a href="./src/resources/onorbitdetails.ts">create</a>({ ...params }) -> void</code>
- <code title="put /udl/onorbitdetails/{id}">client.onorbitdetails.<a href="./src/resources/onorbitdetails.ts">update</a>(pathId, { ...params }) -> void</code>
- <code title="get /udl/onorbitdetails">client.onorbitdetails.<a href="./src/resources/onorbitdetails.ts">list</a>() -> OnorbitdetailListResponse</code>
- <code title="delete /udl/onorbitdetails/{id}">client.onorbitdetails.<a href="./src/resources/onorbitdetails.ts">delete</a>(id) -> void</code>
- <code title="get /udl/onorbitdetails/{id}">client.onorbitdetails.<a href="./src/resources/onorbitdetails.ts">get</a>(id) -> OnorbitdetailGetResponse</code>

# Onorbitevent

Types:

- <code><a href="./src/resources/onorbitevent.ts">OnorbiteventListResponse</a></code>
- <code><a href="./src/resources/onorbitevent.ts">OnorbiteventCountResponse</a></code>
- <code><a href="./src/resources/onorbitevent.ts">OnorbiteventGetResponse</a></code>
- <code><a href="./src/resources/onorbitevent.ts">OnorbiteventTupleResponse</a></code>

Methods:

- <code title="post /udl/onorbitevent">client.onorbitevent.<a href="./src/resources/onorbitevent.ts">create</a>({ ...params }) -> void</code>
- <code title="put /udl/onorbitevent/{id}">client.onorbitevent.<a href="./src/resources/onorbitevent.ts">update</a>(pathId, { ...params }) -> void</code>
- <code title="get /udl/onorbitevent">client.onorbitevent.<a href="./src/resources/onorbitevent.ts">list</a>() -> OnorbiteventListResponse</code>
- <code title="delete /udl/onorbitevent/{id}">client.onorbitevent.<a href="./src/resources/onorbitevent.ts">delete</a>(id) -> void</code>
- <code title="get /udl/onorbitevent/count">client.onorbitevent.<a href="./src/resources/onorbitevent.ts">count</a>() -> string</code>
- <code title="get /udl/onorbitevent/{id}">client.onorbitevent.<a href="./src/resources/onorbitevent.ts">get</a>(id) -> OnorbiteventGetResponse</code>
- <code title="get /udl/onorbitevent/queryhelp">client.onorbitevent.<a href="./src/resources/onorbitevent.ts">queryhelp</a>() -> void</code>
- <code title="get /udl/onorbitevent/tuple">client.onorbitevent.<a href="./src/resources/onorbitevent.ts">tuple</a>({ ...params }) -> OnorbiteventTupleResponse</code>

# Onorbitlist

Types:

- <code><a href="./src/resources/onorbitlist.ts">OnorbitlistListResponse</a></code>
- <code><a href="./src/resources/onorbitlist.ts">OnorbitlistCountResponse</a></code>
- <code><a href="./src/resources/onorbitlist.ts">OnorbitlistGetResponse</a></code>
- <code><a href="./src/resources/onorbitlist.ts">OnorbitlistTupleResponse</a></code>

Methods:

- <code title="post /udl/onorbitlist">client.onorbitlist.<a href="./src/resources/onorbitlist.ts">create</a>({ ...params }) -> void</code>
- <code title="put /udl/onorbitlist/{id}">client.onorbitlist.<a href="./src/resources/onorbitlist.ts">update</a>(pathId, { ...params }) -> void</code>
- <code title="get /udl/onorbitlist">client.onorbitlist.<a href="./src/resources/onorbitlist.ts">list</a>() -> OnorbitlistListResponse</code>
- <code title="delete /udl/onorbitlist/{id}">client.onorbitlist.<a href="./src/resources/onorbitlist.ts">delete</a>(id) -> void</code>
- <code title="get /udl/onorbitlist/count">client.onorbitlist.<a href="./src/resources/onorbitlist.ts">count</a>() -> string</code>
- <code title="get /udl/onorbitlist/{id}">client.onorbitlist.<a href="./src/resources/onorbitlist.ts">get</a>(id) -> OnorbitlistGetResponse</code>
- <code title="get /udl/onorbitlist/queryhelp">client.onorbitlist.<a href="./src/resources/onorbitlist.ts">queryhelp</a>() -> void</code>
- <code title="get /udl/onorbitlist/tuple">client.onorbitlist.<a href="./src/resources/onorbitlist.ts">tuple</a>({ ...params }) -> OnorbitlistTupleResponse</code>

# Onorbitsolararray

Types:

- <code><a href="./src/resources/onorbitsolararray.ts">OnorbitsolararrayListResponse</a></code>
- <code><a href="./src/resources/onorbitsolararray.ts">OnorbitsolararrayGetResponse</a></code>

Methods:

- <code title="post /udl/onorbitsolararray">client.onorbitsolararray.<a href="./src/resources/onorbitsolararray.ts">create</a>({ ...params }) -> void</code>
- <code title="put /udl/onorbitsolararray/{id}">client.onorbitsolararray.<a href="./src/resources/onorbitsolararray.ts">update</a>(pathId, { ...params }) -> void</code>
- <code title="get /udl/onorbitsolararray">client.onorbitsolararray.<a href="./src/resources/onorbitsolararray.ts">list</a>() -> OnorbitsolararrayListResponse</code>
- <code title="delete /udl/onorbitsolararray/{id}">client.onorbitsolararray.<a href="./src/resources/onorbitsolararray.ts">delete</a>(id) -> void</code>
- <code title="get /udl/onorbitsolararray/{id}">client.onorbitsolararray.<a href="./src/resources/onorbitsolararray.ts">get</a>(id) -> OnorbitsolararrayGetResponse</code>

# Onorbitthruster

Types:

- <code><a href="./src/resources/onorbitthruster.ts">OnorbitthrusterListResponse</a></code>
- <code><a href="./src/resources/onorbitthruster.ts">OnorbitthrusterGetResponse</a></code>

Methods:

- <code title="post /udl/onorbitthruster">client.onorbitthruster.<a href="./src/resources/onorbitthruster.ts">create</a>({ ...params }) -> void</code>
- <code title="put /udl/onorbitthruster/{id}">client.onorbitthruster.<a href="./src/resources/onorbitthruster.ts">update</a>(pathId, { ...params }) -> void</code>
- <code title="get /udl/onorbitthruster">client.onorbitthruster.<a href="./src/resources/onorbitthruster.ts">list</a>() -> OnorbitthrusterListResponse</code>
- <code title="delete /udl/onorbitthruster/{id}">client.onorbitthruster.<a href="./src/resources/onorbitthruster.ts">delete</a>(id) -> void</code>
- <code title="get /udl/onorbitthruster/{id}">client.onorbitthruster.<a href="./src/resources/onorbitthruster.ts">get</a>(id) -> OnorbitthrusterGetResponse</code>

# Onorbitthrusterstatus

Types:

- <code><a href="./src/resources/onorbitthrusterstatus/onorbitthrusterstatus.ts">OnorbitthrusterstatusListResponse</a></code>
- <code><a href="./src/resources/onorbitthrusterstatus/onorbitthrusterstatus.ts">OnorbitthrusterstatusCountResponse</a></code>
- <code><a href="./src/resources/onorbitthrusterstatus/onorbitthrusterstatus.ts">OnorbitthrusterstatusTupleResponse</a></code>

Methods:

- <code title="post /udl/onorbitthrusterstatus">client.onorbitthrusterstatus.<a href="./src/resources/onorbitthrusterstatus/onorbitthrusterstatus.ts">create</a>({ ...params }) -> void</code>
- <code title="get /udl/onorbitthrusterstatus">client.onorbitthrusterstatus.<a href="./src/resources/onorbitthrusterstatus/onorbitthrusterstatus.ts">list</a>({ ...params }) -> OnorbitthrusterstatusListResponse</code>
- <code title="delete /udl/onorbitthrusterstatus/{id}">client.onorbitthrusterstatus.<a href="./src/resources/onorbitthrusterstatus/onorbitthrusterstatus.ts">delete</a>(id) -> void</code>
- <code title="get /udl/onorbitthrusterstatus/count">client.onorbitthrusterstatus.<a href="./src/resources/onorbitthrusterstatus/onorbitthrusterstatus.ts">count</a>({ ...params }) -> string</code>
- <code title="post /udl/onorbitthrusterstatus/createBulk">client.onorbitthrusterstatus.<a href="./src/resources/onorbitthrusterstatus/onorbitthrusterstatus.ts">createBulk</a>([ ...body ]) -> void</code>
- <code title="get /udl/onorbitthrusterstatus/{id}">client.onorbitthrusterstatus.<a href="./src/resources/onorbitthrusterstatus/onorbitthrusterstatus.ts">get</a>(id) -> OnorbitthrusterstatusFull</code>
- <code title="get /udl/onorbitthrusterstatus/queryhelp">client.onorbitthrusterstatus.<a href="./src/resources/onorbitthrusterstatus/onorbitthrusterstatus.ts">queryhelp</a>() -> void</code>
- <code title="get /udl/onorbitthrusterstatus/tuple">client.onorbitthrusterstatus.<a href="./src/resources/onorbitthrusterstatus/onorbitthrusterstatus.ts">tuple</a>({ ...params }) -> OnorbitthrusterstatusTupleResponse</code>

## History

Types:

- <code><a href="./src/resources/onorbitthrusterstatus/history.ts">HistoryCountResponse</a></code>

Methods:

- <code title="get /udl/onorbitthrusterstatus/history/count">client.onorbitthrusterstatus.history.<a href="./src/resources/onorbitthrusterstatus/history.ts">count</a>({ ...params }) -> string</code>

# Operatingunit

Types:

- <code><a href="./src/resources/operatingunit.ts">OperatingunitListResponse</a></code>
- <code><a href="./src/resources/operatingunit.ts">OperatingunitCountResponse</a></code>
- <code><a href="./src/resources/operatingunit.ts">OperatingunitGetResponse</a></code>
- <code><a href="./src/resources/operatingunit.ts">OperatingunitTupleResponse</a></code>

Methods:

- <code title="post /udl/operatingunit">client.operatingunit.<a href="./src/resources/operatingunit.ts">create</a>({ ...params }) -> void</code>
- <code title="put /udl/operatingunit/{id}">client.operatingunit.<a href="./src/resources/operatingunit.ts">update</a>(id, { ...params }) -> void</code>
- <code title="get /udl/operatingunit">client.operatingunit.<a href="./src/resources/operatingunit.ts">list</a>() -> OperatingunitListResponse</code>
- <code title="delete /udl/operatingunit/{id}">client.operatingunit.<a href="./src/resources/operatingunit.ts">delete</a>(id) -> void</code>
- <code title="get /udl/operatingunit/count">client.operatingunit.<a href="./src/resources/operatingunit.ts">count</a>() -> string</code>
- <code title="get /udl/operatingunit/{id}">client.operatingunit.<a href="./src/resources/operatingunit.ts">get</a>(id) -> OperatingunitGetResponse</code>
- <code title="get /udl/operatingunit/queryhelp">client.operatingunit.<a href="./src/resources/operatingunit.ts">queryhelp</a>() -> void</code>
- <code title="get /udl/operatingunit/tuple">client.operatingunit.<a href="./src/resources/operatingunit.ts">tuple</a>({ ...params }) -> OperatingunitTupleResponse</code>

# Operatingunitremark

Types:

- <code><a href="./src/resources/operatingunitremark.ts">OperatingunitremarkListResponse</a></code>
- <code><a href="./src/resources/operatingunitremark.ts">OperatingunitremarkCountResponse</a></code>
- <code><a href="./src/resources/operatingunitremark.ts">OperatingunitremarkGetResponse</a></code>
- <code><a href="./src/resources/operatingunitremark.ts">OperatingunitremarkTupleResponse</a></code>

Methods:

- <code title="post /udl/operatingunitremark">client.operatingunitremark.<a href="./src/resources/operatingunitremark.ts">create</a>({ ...params }) -> void</code>
- <code title="get /udl/operatingunitremark">client.operatingunitremark.<a href="./src/resources/operatingunitremark.ts">list</a>() -> OperatingunitremarkListResponse</code>
- <code title="get /udl/operatingunitremark/count">client.operatingunitremark.<a href="./src/resources/operatingunitremark.ts">count</a>() -> string</code>
- <code title="post /udl/operatingunitremark/createBulk">client.operatingunitremark.<a href="./src/resources/operatingunitremark.ts">createBulk</a>([ ...body ]) -> void</code>
- <code title="get /udl/operatingunitremark/{id}">client.operatingunitremark.<a href="./src/resources/operatingunitremark.ts">get</a>(id) -> OperatingunitremarkGetResponse</code>
- <code title="get /udl/operatingunitremark/queryhelp">client.operatingunitremark.<a href="./src/resources/operatingunitremark.ts">queryhelp</a>() -> void</code>
- <code title="get /udl/operatingunitremark/tuple">client.operatingunitremark.<a href="./src/resources/operatingunitremark.ts">tuple</a>({ ...params }) -> OperatingunitremarkTupleResponse</code>

# Orbitdetermination

Types:

- <code><a href="./src/resources/orbitdetermination/orbitdetermination.ts">OrbitdeterminationListResponse</a></code>
- <code><a href="./src/resources/orbitdetermination/orbitdetermination.ts">OrbitdeterminationCountResponse</a></code>
- <code><a href="./src/resources/orbitdetermination/orbitdetermination.ts">OrbitdeterminationTupleResponse</a></code>

Methods:

- <code title="post /udl/orbitdetermination">client.orbitdetermination.<a href="./src/resources/orbitdetermination/orbitdetermination.ts">create</a>({ ...params }) -> void</code>
- <code title="get /udl/orbitdetermination">client.orbitdetermination.<a href="./src/resources/orbitdetermination/orbitdetermination.ts">list</a>({ ...params }) -> OrbitdeterminationListResponse</code>
- <code title="get /udl/orbitdetermination/count">client.orbitdetermination.<a href="./src/resources/orbitdetermination/orbitdetermination.ts">count</a>({ ...params }) -> string</code>
- <code title="post /udl/orbitdetermination/createBulk">client.orbitdetermination.<a href="./src/resources/orbitdetermination/orbitdetermination.ts">createBulk</a>([ ...body ]) -> void</code>
- <code title="post /filedrop/udl-orbitdetermination">client.orbitdetermination.<a href="./src/resources/orbitdetermination/orbitdetermination.ts">createBulkV2</a>([ ...body ]) -> void</code>
- <code title="get /udl/orbitdetermination/{id}">client.orbitdetermination.<a href="./src/resources/orbitdetermination/orbitdetermination.ts">get</a>(id) -> OrbitdeterminationFull</code>
- <code title="get /udl/orbitdetermination/queryhelp">client.orbitdetermination.<a href="./src/resources/orbitdetermination/orbitdetermination.ts">queryhelp</a>() -> void</code>
- <code title="get /udl/orbitdetermination/tuple">client.orbitdetermination.<a href="./src/resources/orbitdetermination/orbitdetermination.ts">tuple</a>({ ...params }) -> OrbitdeterminationTupleResponse</code>

## History

Types:

- <code><a href="./src/resources/orbitdetermination/history.ts">HistoryListResponse</a></code>
- <code><a href="./src/resources/orbitdetermination/history.ts">HistoryCountResponse</a></code>

Methods:

- <code title="get /udl/orbitdetermination/history">client.orbitdetermination.history.<a href="./src/resources/orbitdetermination/history.ts">list</a>({ ...params }) -> HistoryListResponse</code>
- <code title="get /udl/orbitdetermination/history/aodr">client.orbitdetermination.history.<a href="./src/resources/orbitdetermination/history.ts">aodr</a>({ ...params }) -> void</code>
- <code title="get /udl/orbitdetermination/history/count">client.orbitdetermination.history.<a href="./src/resources/orbitdetermination/history.ts">count</a>({ ...params }) -> string</code>

# Orbittrack

Types:

- <code><a href="./src/resources/orbittrack/orbittrack.ts">OrbittrackListResponse</a></code>
- <code><a href="./src/resources/orbittrack/orbittrack.ts">OrbittrackCountResponse</a></code>
- <code><a href="./src/resources/orbittrack/orbittrack.ts">OrbittrackTupleResponse</a></code>

Methods:

- <code title="get /udl/orbittrack">client.orbittrack.<a href="./src/resources/orbittrack/orbittrack.ts">list</a>({ ...params }) -> OrbittrackListResponse</code>
- <code title="get /udl/orbittrack/count">client.orbittrack.<a href="./src/resources/orbittrack/orbittrack.ts">count</a>({ ...params }) -> string</code>
- <code title="post /udl/orbittrack/createBulk">client.orbittrack.<a href="./src/resources/orbittrack/orbittrack.ts">createBulk</a>([ ...body ]) -> void</code>
- <code title="post /filedrop/udl-orbittrack">client.orbittrack.<a href="./src/resources/orbittrack/orbittrack.ts">createBulkV2</a>([ ...body ]) -> void</code>
- <code title="get /udl/orbittrack/queryhelp">client.orbittrack.<a href="./src/resources/orbittrack/orbittrack.ts">queryhelp</a>() -> void</code>
- <code title="get /udl/orbittrack/tuple">client.orbittrack.<a href="./src/resources/orbittrack/orbittrack.ts">tuple</a>({ ...params }) -> OrbittrackTupleResponse</code>

## History

Types:

- <code><a href="./src/resources/orbittrack/history.ts">HistoryListResponse</a></code>
- <code><a href="./src/resources/orbittrack/history.ts">HistoryCountResponse</a></code>

Methods:

- <code title="get /udl/orbittrack/history">client.orbittrack.history.<a href="./src/resources/orbittrack/history.ts">list</a>({ ...params }) -> HistoryListResponse</code>
- <code title="get /udl/orbittrack/history/aodr">client.orbittrack.history.<a href="./src/resources/orbittrack/history.ts">aodr</a>({ ...params }) -> void</code>
- <code title="get /udl/orbittrack/history/count">client.orbittrack.history.<a href="./src/resources/orbittrack/history.ts">count</a>({ ...params }) -> string</code>

# Organization

Types:

- <code><a href="./src/resources/organization.ts">OrganizationFull</a></code>
- <code><a href="./src/resources/organization.ts">OrganizationListResponse</a></code>
- <code><a href="./src/resources/organization.ts">OrganizationCountResponse</a></code>
- <code><a href="./src/resources/organization.ts">OrganizationGetOrganizationCategoriesResponse</a></code>
- <code><a href="./src/resources/organization.ts">OrganizationGetOrganizationTypesResponse</a></code>
- <code><a href="./src/resources/organization.ts">OrganizationTupleResponse</a></code>

Methods:

- <code title="post /udl/organization">client.organization.<a href="./src/resources/organization.ts">create</a>({ ...params }) -> void</code>
- <code title="put /udl/organization/{id}">client.organization.<a href="./src/resources/organization.ts">update</a>(pathId, { ...params }) -> void</code>
- <code title="get /udl/organization">client.organization.<a href="./src/resources/organization.ts">list</a>() -> OrganizationListResponse</code>
- <code title="delete /udl/organization/{id}">client.organization.<a href="./src/resources/organization.ts">delete</a>(id) -> void</code>
- <code title="get /udl/organization/count">client.organization.<a href="./src/resources/organization.ts">count</a>() -> string</code>
- <code title="get /udl/organization/{id}">client.organization.<a href="./src/resources/organization.ts">get</a>(id) -> OrganizationFull</code>
- <code title="get /udl/organization/getOrganizationCategories">client.organization.<a href="./src/resources/organization.ts">getOrganizationCategories</a>() -> OrganizationGetOrganizationCategoriesResponse</code>
- <code title="get /udl/organization/getOrganizationTypes">client.organization.<a href="./src/resources/organization.ts">getOrganizationTypes</a>() -> OrganizationGetOrganizationTypesResponse</code>
- <code title="get /udl/organization/queryhelp">client.organization.<a href="./src/resources/organization.ts">queryhelp</a>() -> void</code>
- <code title="get /udl/organization/tuple">client.organization.<a href="./src/resources/organization.ts">tuple</a>({ ...params }) -> OrganizationTupleResponse</code>

# Organizationdetails

Types:

- <code><a href="./src/resources/organizationdetails.ts">OrganizationDetailsFull</a></code>
- <code><a href="./src/resources/organizationdetails.ts">OrganizationdetailListResponse</a></code>
- <code><a href="./src/resources/organizationdetails.ts">OrganizationdetailFindBySourceResponse</a></code>

Methods:

- <code title="post /udl/organizationdetails">client.organizationdetails.<a href="./src/resources/organizationdetails.ts">create</a>({ ...params }) -> void</code>
- <code title="put /udl/organizationdetails/{id}">client.organizationdetails.<a href="./src/resources/organizationdetails.ts">update</a>(pathId, { ...params }) -> void</code>
- <code title="get /udl/organizationdetails">client.organizationdetails.<a href="./src/resources/organizationdetails.ts">list</a>({ ...params }) -> OrganizationdetailListResponse</code>
- <code title="delete /udl/organizationdetails/{id}">client.organizationdetails.<a href="./src/resources/organizationdetails.ts">delete</a>(id) -> void</code>
- <code title="get /udl/organizationdetails/findBySource">client.organizationdetails.<a href="./src/resources/organizationdetails.ts">findBySource</a>({ ...params }) -> OrganizationdetailFindBySourceResponse</code>
- <code title="get /udl/organizationdetails/{id}">client.organizationdetails.<a href="./src/resources/organizationdetails.ts">get</a>(id) -> OrganizationDetailsFull</code>

# Passiveradarobservation

Types:

- <code><a href="./src/resources/passiveradarobservation/passiveradarobservation.ts">PassiveradarobservationListResponse</a></code>
- <code><a href="./src/resources/passiveradarobservation/passiveradarobservation.ts">PassiveradarobservationCountResponse</a></code>
- <code><a href="./src/resources/passiveradarobservation/passiveradarobservation.ts">PassiveradarobservationTupleResponse</a></code>

Methods:

- <code title="post /udl/passiveradarobservation">client.passiveradarobservation.<a href="./src/resources/passiveradarobservation/passiveradarobservation.ts">create</a>({ ...params }) -> void</code>
- <code title="get /udl/passiveradarobservation">client.passiveradarobservation.<a href="./src/resources/passiveradarobservation/passiveradarobservation.ts">list</a>({ ...params }) -> PassiveradarobservationListResponse</code>
- <code title="get /udl/passiveradarobservation/count">client.passiveradarobservation.<a href="./src/resources/passiveradarobservation/passiveradarobservation.ts">count</a>({ ...params }) -> string</code>
- <code title="post /udl/passiveradarobservation/createBulk">client.passiveradarobservation.<a href="./src/resources/passiveradarobservation/passiveradarobservation.ts">createBulk</a>([ ...body ]) -> void</code>
- <code title="post /filedrop/udl-passiveradar">client.passiveradarobservation.<a href="./src/resources/passiveradarobservation/passiveradarobservation.ts">fileCreate</a>([ ...body ]) -> void</code>
- <code title="get /udl/passiveradarobservation/{id}">client.passiveradarobservation.<a href="./src/resources/passiveradarobservation/passiveradarobservation.ts">get</a>(id) -> PassiveradarobservationFull</code>
- <code title="get /udl/passiveradarobservation/queryhelp">client.passiveradarobservation.<a href="./src/resources/passiveradarobservation/passiveradarobservation.ts">queryhelp</a>() -> void</code>
- <code title="get /udl/passiveradarobservation/tuple">client.passiveradarobservation.<a href="./src/resources/passiveradarobservation/passiveradarobservation.ts">tuple</a>({ ...params }) -> PassiveradarobservationTupleResponse</code>

## History

Types:

- <code><a href="./src/resources/passiveradarobservation/history.ts">HistoryListResponse</a></code>
- <code><a href="./src/resources/passiveradarobservation/history.ts">HistoryCountResponse</a></code>

Methods:

- <code title="get /udl/passiveradarobservation/history">client.passiveradarobservation.history.<a href="./src/resources/passiveradarobservation/history.ts">list</a>({ ...params }) -> HistoryListResponse</code>
- <code title="get /udl/passiveradarobservation/history/aodr">client.passiveradarobservation.history.<a href="./src/resources/passiveradarobservation/history.ts">aodr</a>({ ...params }) -> void</code>
- <code title="get /udl/passiveradarobservation/history/count">client.passiveradarobservation.history.<a href="./src/resources/passiveradarobservation/history.ts">count</a>({ ...params }) -> string</code>

# Personnelrecovery

Types:

- <code><a href="./src/resources/personnelrecovery/personnelrecovery.ts">PersonnelRecoveryFullL</a></code>
- <code><a href="./src/resources/personnelrecovery/personnelrecovery.ts">PersonnelrecoveryListResponse</a></code>
- <code><a href="./src/resources/personnelrecovery/personnelrecovery.ts">PersonnelrecoveryCountResponse</a></code>
- <code><a href="./src/resources/personnelrecovery/personnelrecovery.ts">PersonnelrecoveryTupleResponse</a></code>

Methods:

- <code title="post /udl/personnelrecovery">client.personnelrecovery.<a href="./src/resources/personnelrecovery/personnelrecovery.ts">create</a>({ ...params }) -> void</code>
- <code title="get /udl/personnelrecovery">client.personnelrecovery.<a href="./src/resources/personnelrecovery/personnelrecovery.ts">list</a>({ ...params }) -> PersonnelrecoveryListResponse</code>
- <code title="get /udl/personnelrecovery/count">client.personnelrecovery.<a href="./src/resources/personnelrecovery/personnelrecovery.ts">count</a>({ ...params }) -> string</code>
- <code title="post /udl/personnelrecovery/createBulk">client.personnelrecovery.<a href="./src/resources/personnelrecovery/personnelrecovery.ts">createBulk</a>([ ...body ]) -> void</code>
- <code title="post /filedrop/udl-personnelrecovery">client.personnelrecovery.<a href="./src/resources/personnelrecovery/personnelrecovery.ts">fileCreate</a>([ ...body ]) -> void</code>
- <code title="get /udl/personnelrecovery/{id}">client.personnelrecovery.<a href="./src/resources/personnelrecovery/personnelrecovery.ts">get</a>(id) -> PersonnelRecoveryFullL</code>
- <code title="get /udl/personnelrecovery/queryhelp">client.personnelrecovery.<a href="./src/resources/personnelrecovery/personnelrecovery.ts">queryhelp</a>() -> void</code>
- <code title="get /udl/personnelrecovery/tuple">client.personnelrecovery.<a href="./src/resources/personnelrecovery/personnelrecovery.ts">tuple</a>({ ...params }) -> PersonnelrecoveryTupleResponse</code>

## History

Types:

- <code><a href="./src/resources/personnelrecovery/history.ts">HistoryListResponse</a></code>
- <code><a href="./src/resources/personnelrecovery/history.ts">HistoryCountResponse</a></code>

Methods:

- <code title="get /udl/personnelrecovery/history">client.personnelrecovery.history.<a href="./src/resources/personnelrecovery/history.ts">list</a>({ ...params }) -> HistoryListResponse</code>
- <code title="get /udl/personnelrecovery/history/count">client.personnelrecovery.history.<a href="./src/resources/personnelrecovery/history.ts">count</a>({ ...params }) -> string</code>

# Poi

Types:

- <code><a href="./src/resources/poi.ts">PoiListResponse</a></code>
- <code><a href="./src/resources/poi.ts">PoiCountResponse</a></code>
- <code><a href="./src/resources/poi.ts">PoiTupleResponse</a></code>

Methods:

- <code title="post /udl/poi">client.poi.<a href="./src/resources/poi.ts">create</a>({ ...params }) -> void</code>
- <code title="get /udl/poi">client.poi.<a href="./src/resources/poi.ts">list</a>({ ...params }) -> PoiListResponse</code>
- <code title="get /udl/poi/count">client.poi.<a href="./src/resources/poi.ts">count</a>({ ...params }) -> string</code>
- <code title="post /udl/poi/createBulk">client.poi.<a href="./src/resources/poi.ts">createBulk</a>([ ...body ]) -> void</code>
- <code title="post /filedrop/udl-poi">client.poi.<a href="./src/resources/poi.ts">createBulkV2</a>([ ...body ]) -> void</code>
- <code title="get /udl/poi/{id}">client.poi.<a href="./src/resources/poi.ts">get</a>(id) -> PoiFull</code>
- <code title="get /udl/poi/queryhelp">client.poi.<a href="./src/resources/poi.ts">queryhelp</a>() -> void</code>
- <code title="get /udl/poi/tuple">client.poi.<a href="./src/resources/poi.ts">tuple</a>({ ...params }) -> PoiTupleResponse</code>

# Port

Types:

- <code><a href="./src/resources/port.ts">PortListResponse</a></code>
- <code><a href="./src/resources/port.ts">PortCountResponse</a></code>
- <code><a href="./src/resources/port.ts">PortGetResponse</a></code>
- <code><a href="./src/resources/port.ts">PortTupleResponse</a></code>

Methods:

- <code title="post /udl/port">client.port.<a href="./src/resources/port.ts">create</a>({ ...params }) -> void</code>
- <code title="put /udl/port/{id}">client.port.<a href="./src/resources/port.ts">update</a>(pathId, { ...params }) -> void</code>
- <code title="get /udl/port">client.port.<a href="./src/resources/port.ts">list</a>() -> PortListResponse</code>
- <code title="get /udl/port/count">client.port.<a href="./src/resources/port.ts">count</a>() -> string</code>
- <code title="post /udl/port/createBulk">client.port.<a href="./src/resources/port.ts">createBulk</a>([ ...body ]) -> void</code>
- <code title="get /udl/port/{id}">client.port.<a href="./src/resources/port.ts">get</a>(id) -> PortGetResponse</code>
- <code title="get /udl/port/queryhelp">client.port.<a href="./src/resources/port.ts">queryhelp</a>() -> void</code>
- <code title="get /udl/port/tuple">client.port.<a href="./src/resources/port.ts">tuple</a>({ ...params }) -> PortTupleResponse</code>

# Radarobservation

Types:

- <code><a href="./src/resources/radarobservation.ts">RadarobservationListResponse</a></code>
- <code><a href="./src/resources/radarobservation.ts">RadarobservationCountResponse</a></code>
- <code><a href="./src/resources/radarobservation.ts">RadarobservationTupleResponse</a></code>

Methods:

- <code title="post /udl/radarobservation">client.radarobservation.<a href="./src/resources/radarobservation.ts">create</a>({ ...params }) -> void</code>
- <code title="get /udl/radarobservation">client.radarobservation.<a href="./src/resources/radarobservation.ts">list</a>({ ...params }) -> RadarobservationListResponse</code>
- <code title="get /udl/radarobservation/count">client.radarobservation.<a href="./src/resources/radarobservation.ts">count</a>({ ...params }) -> string</code>
- <code title="post /udl/radarobservation/createBulk">client.radarobservation.<a href="./src/resources/radarobservation.ts">createBulk</a>([ ...body ]) -> void</code>
- <code title="post /filedrop/udl-radar">client.radarobservation.<a href="./src/resources/radarobservation.ts">createBulkV2</a>([ ...body ]) -> void</code>
- <code title="get /udl/radarobservation/{id}">client.radarobservation.<a href="./src/resources/radarobservation.ts">get</a>(id) -> RadarobservationFull</code>
- <code title="get /udl/radarobservation/queryhelp">client.radarobservation.<a href="./src/resources/radarobservation.ts">queryhelp</a>() -> void</code>
- <code title="get /udl/radarobservation/tuple">client.radarobservation.<a href="./src/resources/radarobservation.ts">tuple</a>({ ...params }) -> RadarobservationTupleResponse</code>

# Rfband

Types:

- <code><a href="./src/resources/rfband.ts">RfbandListResponse</a></code>
- <code><a href="./src/resources/rfband.ts">RfbandCountResponse</a></code>
- <code><a href="./src/resources/rfband.ts">RfbandGetResponse</a></code>
- <code><a href="./src/resources/rfband.ts">RfbandTupleResponse</a></code>

Methods:

- <code title="post /udl/rfband">client.rfband.<a href="./src/resources/rfband.ts">create</a>({ ...params }) -> void</code>
- <code title="put /udl/rfband/{id}">client.rfband.<a href="./src/resources/rfband.ts">update</a>(pathId, { ...params }) -> void</code>
- <code title="get /udl/rfband">client.rfband.<a href="./src/resources/rfband.ts">list</a>() -> RfbandListResponse</code>
- <code title="delete /udl/rfband/{id}">client.rfband.<a href="./src/resources/rfband.ts">delete</a>(id) -> void</code>
- <code title="get /udl/rfband/count">client.rfband.<a href="./src/resources/rfband.ts">count</a>() -> string</code>
- <code title="get /udl/rfband/{id}">client.rfband.<a href="./src/resources/rfband.ts">get</a>(id) -> RfbandGetResponse</code>
- <code title="get /udl/rfband/queryhelp">client.rfband.<a href="./src/resources/rfband.ts">queryhelp</a>() -> void</code>
- <code title="get /udl/rfband/tuple">client.rfband.<a href="./src/resources/rfband.ts">tuple</a>({ ...params }) -> RfbandTupleResponse</code>

# Rfbandtype

Types:

- <code><a href="./src/resources/rfbandtype.ts">RfbandtypeListResponse</a></code>
- <code><a href="./src/resources/rfbandtype.ts">RfbandtypeCountResponse</a></code>
- <code><a href="./src/resources/rfbandtype.ts">RfbandtypeGetResponse</a></code>
- <code><a href="./src/resources/rfbandtype.ts">RfbandtypeTupleResponse</a></code>

Methods:

- <code title="post /udl/rfbandtype">client.rfbandtype.<a href="./src/resources/rfbandtype.ts">create</a>({ ...params }) -> void</code>
- <code title="put /udl/rfbandtype/{id}">client.rfbandtype.<a href="./src/resources/rfbandtype.ts">update</a>(pathId, { ...params }) -> void</code>
- <code title="get /udl/rfbandtype">client.rfbandtype.<a href="./src/resources/rfbandtype.ts">list</a>() -> RfbandtypeListResponse</code>
- <code title="delete /udl/rfbandtype/{id}">client.rfbandtype.<a href="./src/resources/rfbandtype.ts">delete</a>(id) -> void</code>
- <code title="get /udl/rfbandtype/count">client.rfbandtype.<a href="./src/resources/rfbandtype.ts">count</a>() -> string</code>
- <code title="get /udl/rfbandtype/{id}">client.rfbandtype.<a href="./src/resources/rfbandtype.ts">get</a>(id) -> RfbandtypeGetResponse</code>
- <code title="get /udl/rfbandtype/queryhelp">client.rfbandtype.<a href="./src/resources/rfbandtype.ts">queryhelp</a>() -> void</code>
- <code title="get /udl/rfbandtype/tuple">client.rfbandtype.<a href="./src/resources/rfbandtype.ts">tuple</a>({ ...params }) -> RfbandtypeTupleResponse</code>

# Rfemitter

Types:

- <code><a href="./src/resources/rfemitter.ts">RfemitterListResponse</a></code>
- <code><a href="./src/resources/rfemitter.ts">RfemitterCountResponse</a></code>
- <code><a href="./src/resources/rfemitter.ts">RfemitterGetResponse</a></code>
- <code><a href="./src/resources/rfemitter.ts">RfemitterTupleResponse</a></code>

Methods:

- <code title="post /udl/rfemitter">client.rfemitter.<a href="./src/resources/rfemitter.ts">create</a>({ ...params }) -> void</code>
- <code title="put /udl/rfemitter/{id}">client.rfemitter.<a href="./src/resources/rfemitter.ts">update</a>(pathId, { ...params }) -> void</code>
- <code title="get /udl/rfemitter">client.rfemitter.<a href="./src/resources/rfemitter.ts">list</a>() -> RfemitterListResponse</code>
- <code title="delete /udl/rfemitter/{id}">client.rfemitter.<a href="./src/resources/rfemitter.ts">delete</a>(id) -> void</code>
- <code title="get /udl/rfemitter/count">client.rfemitter.<a href="./src/resources/rfemitter.ts">count</a>() -> string</code>
- <code title="get /udl/rfemitter/{id}">client.rfemitter.<a href="./src/resources/rfemitter.ts">get</a>(id) -> RfemitterGetResponse</code>
- <code title="get /udl/rfemitter/queryhelp">client.rfemitter.<a href="./src/resources/rfemitter.ts">queryhelp</a>() -> void</code>
- <code title="get /udl/rfemitter/tuple">client.rfemitter.<a href="./src/resources/rfemitter.ts">tuple</a>({ ...params }) -> RfemitterTupleResponse</code>

# Rfemitterdetails

Types:

- <code><a href="./src/resources/rfemitterdetails.ts">RfemitterdetailListResponse</a></code>
- <code><a href="./src/resources/rfemitterdetails.ts">RfemitterdetailCountResponse</a></code>
- <code><a href="./src/resources/rfemitterdetails.ts">RfemitterdetailGetResponse</a></code>
- <code><a href="./src/resources/rfemitterdetails.ts">RfemitterdetailTupleResponse</a></code>

Methods:

- <code title="post /udl/rfemitterdetails">client.rfemitterdetails.<a href="./src/resources/rfemitterdetails.ts">create</a>({ ...params }) -> void</code>
- <code title="put /udl/rfemitterdetails/{id}">client.rfemitterdetails.<a href="./src/resources/rfemitterdetails.ts">update</a>(pathId, { ...params }) -> void</code>
- <code title="get /udl/rfemitterdetails">client.rfemitterdetails.<a href="./src/resources/rfemitterdetails.ts">list</a>() -> RfemitterdetailListResponse</code>
- <code title="delete /udl/rfemitterdetails/{id}">client.rfemitterdetails.<a href="./src/resources/rfemitterdetails.ts">delete</a>(id) -> void</code>
- <code title="get /udl/rfemitterdetails/count">client.rfemitterdetails.<a href="./src/resources/rfemitterdetails.ts">count</a>() -> string</code>
- <code title="get /udl/rfemitterdetails/{id}">client.rfemitterdetails.<a href="./src/resources/rfemitterdetails.ts">get</a>(id) -> RfemitterdetailGetResponse</code>
- <code title="get /udl/rfemitterdetails/queryhelp">client.rfemitterdetails.<a href="./src/resources/rfemitterdetails.ts">queryhelp</a>() -> void</code>
- <code title="get /udl/rfemitterdetails/tuple">client.rfemitterdetails.<a href="./src/resources/rfemitterdetails.ts">tuple</a>({ ...params }) -> RfemitterdetailTupleResponse</code>

# Rfobservation

Types:

- <code><a href="./src/resources/rfobservation/rfobservation.ts">RfobservationListResponse</a></code>
- <code><a href="./src/resources/rfobservation/rfobservation.ts">RfobservationCountResponse</a></code>
- <code><a href="./src/resources/rfobservation/rfobservation.ts">RfobservationTupleResponse</a></code>

Methods:

- <code title="post /udl/rfobservation">client.rfobservation.<a href="./src/resources/rfobservation/rfobservation.ts">create</a>({ ...params }) -> void</code>
- <code title="get /udl/rfobservation">client.rfobservation.<a href="./src/resources/rfobservation/rfobservation.ts">list</a>({ ...params }) -> RfobservationListResponse</code>
- <code title="get /udl/rfobservation/count">client.rfobservation.<a href="./src/resources/rfobservation/rfobservation.ts">count</a>({ ...params }) -> string</code>
- <code title="post /udl/rfobservation/createBulk">client.rfobservation.<a href="./src/resources/rfobservation/rfobservation.ts">createBulk</a>([ ...body ]) -> void</code>
- <code title="post /filedrop/udl-rf">client.rfobservation.<a href="./src/resources/rfobservation/rfobservation.ts">createBulkV2</a>([ ...body ]) -> void</code>
- <code title="get /udl/rfobservation/{id}">client.rfobservation.<a href="./src/resources/rfobservation/rfobservation.ts">get</a>(id) -> RfobservationdetailsFull</code>
- <code title="get /udl/rfobservation/queryhelp">client.rfobservation.<a href="./src/resources/rfobservation/rfobservation.ts">queryhelp</a>() -> void</code>
- <code title="get /udl/rfobservation/tuple">client.rfobservation.<a href="./src/resources/rfobservation/rfobservation.ts">tuple</a>({ ...params }) -> RfobservationTupleResponse</code>

## History

Types:

- <code><a href="./src/resources/rfobservation/history.ts">HistoryCountResponse</a></code>

Methods:

- <code title="get /udl/rfobservation/history/count">client.rfobservation.history.<a href="./src/resources/rfobservation/history.ts">count</a>({ ...params }) -> string</code>

# Sarobservation

Types:

- <code><a href="./src/resources/sarobservation/sarobservation.ts">SarobservationListResponse</a></code>
- <code><a href="./src/resources/sarobservation/sarobservation.ts">SarobservationCountResponse</a></code>
- <code><a href="./src/resources/sarobservation/sarobservation.ts">SarobservationTupleResponse</a></code>

Methods:

- <code title="post /udl/sarobservation">client.sarobservation.<a href="./src/resources/sarobservation/sarobservation.ts">create</a>({ ...params }) -> void</code>
- <code title="get /udl/sarobservation">client.sarobservation.<a href="./src/resources/sarobservation/sarobservation.ts">list</a>({ ...params }) -> SarobservationListResponse</code>
- <code title="get /udl/sarobservation/count">client.sarobservation.<a href="./src/resources/sarobservation/sarobservation.ts">count</a>({ ...params }) -> string</code>
- <code title="post /udl/sarobservation/createBulk">client.sarobservation.<a href="./src/resources/sarobservation/sarobservation.ts">createBulk</a>([ ...body ]) -> void</code>
- <code title="post /filedrop/udl-sar">client.sarobservation.<a href="./src/resources/sarobservation/sarobservation.ts">createBulkV2</a>([ ...body ]) -> void</code>
- <code title="get /udl/sarobservation/{id}">client.sarobservation.<a href="./src/resources/sarobservation/sarobservation.ts">get</a>(id) -> SarobservationFull</code>
- <code title="get /udl/sarobservation/queryhelp">client.sarobservation.<a href="./src/resources/sarobservation/sarobservation.ts">queryhelp</a>() -> void</code>
- <code title="get /udl/sarobservation/tuple">client.sarobservation.<a href="./src/resources/sarobservation/sarobservation.ts">tuple</a>({ ...params }) -> SarobservationTupleResponse</code>

## History

Types:

- <code><a href="./src/resources/sarobservation/history.ts">HistoryRetrieveResponse</a></code>
- <code><a href="./src/resources/sarobservation/history.ts">HistoryCountResponse</a></code>

Methods:

- <code title="get /udl/sarobservation/history">client.sarobservation.history.<a href="./src/resources/sarobservation/history.ts">retrieve</a>({ ...params }) -> HistoryRetrieveResponse</code>
- <code title="get /udl/sarobservation/history/aodr">client.sarobservation.history.<a href="./src/resources/sarobservation/history.ts">aodr</a>({ ...params }) -> void</code>
- <code title="get /udl/sarobservation/history/count">client.sarobservation.history.<a href="./src/resources/sarobservation/history.ts">count</a>({ ...params }) -> string</code>

# Scientific

Types:

- <code><a href="./src/resources/scientific.ts">ScientificListResponse</a></code>
- <code><a href="./src/resources/scientific.ts">ScientificCountResponse</a></code>
- <code><a href="./src/resources/scientific.ts">ScientificGetResponse</a></code>
- <code><a href="./src/resources/scientific.ts">ScientificTupleResponse</a></code>

Methods:

- <code title="post /udl/scientific">client.scientific.<a href="./src/resources/scientific.ts">create</a>({ ...params }) -> void</code>
- <code title="put /udl/scientific/{id}">client.scientific.<a href="./src/resources/scientific.ts">update</a>(pathId, { ...params }) -> void</code>
- <code title="get /udl/scientific">client.scientific.<a href="./src/resources/scientific.ts">list</a>() -> ScientificListResponse</code>
- <code title="delete /udl/scientific/{id}">client.scientific.<a href="./src/resources/scientific.ts">delete</a>(id) -> void</code>
- <code title="get /udl/scientific/count">client.scientific.<a href="./src/resources/scientific.ts">count</a>() -> string</code>
- <code title="get /udl/scientific/{id}">client.scientific.<a href="./src/resources/scientific.ts">get</a>(id) -> ScientificGetResponse</code>
- <code title="get /udl/scientific/queryhelp">client.scientific.<a href="./src/resources/scientific.ts">queryhelp</a>() -> void</code>
- <code title="get /udl/scientific/tuple">client.scientific.<a href="./src/resources/scientific.ts">tuple</a>({ ...params }) -> ScientificTupleResponse</code>

# Sensor

Types:

- <code><a href="./src/resources/sensor/sensor.ts">SensorListResponse</a></code>
- <code><a href="./src/resources/sensor/sensor.ts">SensorCountResponse</a></code>
- <code><a href="./src/resources/sensor/sensor.ts">SensorGetResponse</a></code>
- <code><a href="./src/resources/sensor/sensor.ts">SensorTupleResponse</a></code>

Methods:

- <code title="post /udl/sensor">client.sensor.<a href="./src/resources/sensor/sensor.ts">create</a>({ ...params }) -> void</code>
- <code title="put /udl/sensor/{id}">client.sensor.<a href="./src/resources/sensor/sensor.ts">update</a>(id, { ...params }) -> void</code>
- <code title="get /udl/sensor">client.sensor.<a href="./src/resources/sensor/sensor.ts">list</a>() -> SensorListResponse</code>
- <code title="delete /udl/sensor/{id}">client.sensor.<a href="./src/resources/sensor/sensor.ts">delete</a>(id) -> void</code>
- <code title="get /udl/sensor/count">client.sensor.<a href="./src/resources/sensor/sensor.ts">count</a>() -> string</code>
- <code title="get /udl/sensor/{id}">client.sensor.<a href="./src/resources/sensor/sensor.ts">get</a>(id) -> SensorGetResponse</code>
- <code title="get /udl/sensor/queryhelp">client.sensor.<a href="./src/resources/sensor/sensor.ts">queryhelp</a>() -> void</code>
- <code title="get /udl/sensor/tuple">client.sensor.<a href="./src/resources/sensor/sensor.ts">tuple</a>({ ...params }) -> SensorTupleResponse</code>

## Calibration

Types:

- <code><a href="./src/resources/sensor/calibration/calibration.ts">CalibrationRetrieveResponse</a></code>
- <code><a href="./src/resources/sensor/calibration/calibration.ts">CalibrationCountResponse</a></code>
- <code><a href="./src/resources/sensor/calibration/calibration.ts">CalibrationQueryResponse</a></code>
- <code><a href="./src/resources/sensor/calibration/calibration.ts">CalibrationTupleResponse</a></code>

Methods:

- <code title="post /udl/sensorcalibration">client.sensor.calibration.<a href="./src/resources/sensor/calibration/calibration.ts">create</a>({ ...params }) -> void</code>
- <code title="get /udl/sensorcalibration/{id}">client.sensor.calibration.<a href="./src/resources/sensor/calibration/calibration.ts">retrieve</a>(id) -> CalibrationRetrieveResponse</code>
- <code title="get /udl/sensorcalibration/count">client.sensor.calibration.<a href="./src/resources/sensor/calibration/calibration.ts">count</a>({ ...params }) -> string</code>
- <code title="post /udl/sensorcalibration/createBulk">client.sensor.calibration.<a href="./src/resources/sensor/calibration/calibration.ts">createBulk</a>([ ...body ]) -> void</code>
- <code title="post /filedrop/udl-sensorcalibration">client.sensor.calibration.<a href="./src/resources/sensor/calibration/calibration.ts">createBulkV2</a>([ ...body ]) -> void</code>
- <code title="get /udl/sensorcalibration">client.sensor.calibration.<a href="./src/resources/sensor/calibration/calibration.ts">query</a>({ ...params }) -> CalibrationQueryResponse</code>
- <code title="get /udl/sensorcalibration/queryhelp">client.sensor.calibration.<a href="./src/resources/sensor/calibration/calibration.ts">queryHelp</a>() -> void</code>
- <code title="get /udl/sensorcalibration/tuple">client.sensor.calibration.<a href="./src/resources/sensor/calibration/calibration.ts">tuple</a>({ ...params }) -> CalibrationTupleResponse</code>

### History

Types:

- <code><a href="./src/resources/sensor/calibration/history.ts">HistoryCountResponse</a></code>
- <code><a href="./src/resources/sensor/calibration/history.ts">HistoryQueryResponse</a></code>

Methods:

- <code title="get /udl/sensorcalibration/history/count">client.sensor.calibration.history.<a href="./src/resources/sensor/calibration/history.ts">count</a>({ ...params }) -> string</code>
- <code title="get /udl/sensorcalibration/history">client.sensor.calibration.history.<a href="./src/resources/sensor/calibration/history.ts">query</a>({ ...params }) -> HistoryQueryResponse</code>
- <code title="get /udl/sensorcalibration/history/aodr">client.sensor.calibration.history.<a href="./src/resources/sensor/calibration/history.ts">writeAodr</a>({ ...params }) -> void</code>

# Sensormaintenance

Types:

- <code><a href="./src/resources/sensormaintenance/sensormaintenance.ts">SensormaintenanceListResponse</a></code>
- <code><a href="./src/resources/sensormaintenance/sensormaintenance.ts">SensormaintenanceCountResponse</a></code>
- <code><a href="./src/resources/sensormaintenance/sensormaintenance.ts">SensormaintenanceCurrentResponse</a></code>
- <code><a href="./src/resources/sensormaintenance/sensormaintenance.ts">SensormaintenanceTupleResponse</a></code>

Methods:

- <code title="post /udl/sensormaintenance">client.sensormaintenance.<a href="./src/resources/sensormaintenance/sensormaintenance.ts">create</a>({ ...params }) -> void</code>
- <code title="put /udl/sensormaintenance/{id}">client.sensormaintenance.<a href="./src/resources/sensormaintenance/sensormaintenance.ts">update</a>(pathId, { ...params }) -> void</code>
- <code title="get /udl/sensormaintenance">client.sensormaintenance.<a href="./src/resources/sensormaintenance/sensormaintenance.ts">list</a>({ ...params }) -> SensormaintenanceListResponse</code>
- <code title="delete /udl/sensormaintenance/{id}">client.sensormaintenance.<a href="./src/resources/sensormaintenance/sensormaintenance.ts">delete</a>(id) -> void</code>
- <code title="get /udl/sensormaintenance/count">client.sensormaintenance.<a href="./src/resources/sensormaintenance/sensormaintenance.ts">count</a>({ ...params }) -> string</code>
- <code title="post /udl/sensormaintenance/createBulk">client.sensormaintenance.<a href="./src/resources/sensormaintenance/sensormaintenance.ts">createBulk</a>([ ...body ]) -> void</code>
- <code title="get /udl/sensormaintenance/current">client.sensormaintenance.<a href="./src/resources/sensormaintenance/sensormaintenance.ts">current</a>() -> SensormaintenanceCurrentResponse</code>
- <code title="get /udl/sensormaintenance/{id}">client.sensormaintenance.<a href="./src/resources/sensormaintenance/sensormaintenance.ts">get</a>(id) -> SensormaintenanceFull</code>
- <code title="get /udl/sensormaintenance/queryhelp">client.sensormaintenance.<a href="./src/resources/sensormaintenance/sensormaintenance.ts">queryhelp</a>() -> void</code>
- <code title="get /udl/sensormaintenance/tuple">client.sensormaintenance.<a href="./src/resources/sensormaintenance/sensormaintenance.ts">tuple</a>({ ...params }) -> SensormaintenanceTupleResponse</code>

## History

Types:

- <code><a href="./src/resources/sensormaintenance/history.ts">HistoryRetrieveResponse</a></code>
- <code><a href="./src/resources/sensormaintenance/history.ts">HistoryCountResponse</a></code>

Methods:

- <code title="get /udl/sensormaintenance/history">client.sensormaintenance.history.<a href="./src/resources/sensormaintenance/history.ts">retrieve</a>({ ...params }) -> HistoryRetrieveResponse</code>
- <code title="get /udl/sensormaintenance/history/aodr">client.sensormaintenance.history.<a href="./src/resources/sensormaintenance/history.ts">aodr</a>({ ...params }) -> void</code>
- <code title="get /udl/sensormaintenance/history/count">client.sensormaintenance.history.<a href="./src/resources/sensormaintenance/history.ts">count</a>({ ...params }) -> string</code>

# Sensorobservationtype

Types:

- <code><a href="./src/resources/sensorobservationtype.ts">SensorobservationtypeListResponse</a></code>
- <code><a href="./src/resources/sensorobservationtype.ts">SensorobservationtypeGetResponse</a></code>

Methods:

- <code title="get /udl/sensorobservationtype">client.sensorobservationtype.<a href="./src/resources/sensorobservationtype.ts">list</a>() -> SensorobservationtypeListResponse</code>
- <code title="get /udl/sensorobservationtype/{id}">client.sensorobservationtype.<a href="./src/resources/sensorobservationtype.ts">get</a>(id) -> SensorobservationtypeGetResponse</code>
- <code title="get /udl/sensorobservationtype/queryhelp">client.sensorobservationtype.<a href="./src/resources/sensorobservationtype.ts">queryhelp</a>() -> void</code>

# Sensorplan

Types:

- <code><a href="./src/resources/sensorplan/sensorplan.ts">SensorplanListResponse</a></code>
- <code><a href="./src/resources/sensorplan/sensorplan.ts">SensorplanCountResponse</a></code>
- <code><a href="./src/resources/sensorplan/sensorplan.ts">SensorplanTupleResponse</a></code>

Methods:

- <code title="post /udl/sensorplan">client.sensorplan.<a href="./src/resources/sensorplan/sensorplan.ts">create</a>({ ...params }) -> void</code>
- <code title="put /udl/sensorplan/{id}">client.sensorplan.<a href="./src/resources/sensorplan/sensorplan.ts">update</a>(pathId, { ...params }) -> void</code>
- <code title="get /udl/sensorplan">client.sensorplan.<a href="./src/resources/sensorplan/sensorplan.ts">list</a>({ ...params }) -> SensorplanListResponse</code>
- <code title="get /udl/sensorplan/count">client.sensorplan.<a href="./src/resources/sensorplan/sensorplan.ts">count</a>({ ...params }) -> string</code>
- <code title="post /filedrop/udl-sensorplan">client.sensorplan.<a href="./src/resources/sensorplan/sensorplan.ts">createBulkV2</a>([ ...body ]) -> void</code>
- <code title="get /udl/sensorplan/{id}">client.sensorplan.<a href="./src/resources/sensorplan/sensorplan.ts">get</a>(id) -> SensorplanFull</code>
- <code title="get /udl/sensorplan/queryhelp">client.sensorplan.<a href="./src/resources/sensorplan/sensorplan.ts">queryhelp</a>() -> void</code>
- <code title="get /udl/sensorplan/tuple">client.sensorplan.<a href="./src/resources/sensorplan/sensorplan.ts">tuple</a>({ ...params }) -> SensorplanTupleResponse</code>

## History

Types:

- <code><a href="./src/resources/sensorplan/history.ts">HistoryRetrieveResponse</a></code>
- <code><a href="./src/resources/sensorplan/history.ts">HistoryCountResponse</a></code>

Methods:

- <code title="get /udl/sensorplan/history">client.sensorplan.history.<a href="./src/resources/sensorplan/history.ts">retrieve</a>({ ...params }) -> HistoryRetrieveResponse</code>
- <code title="get /udl/sensorplan/history/aodr">client.sensorplan.history.<a href="./src/resources/sensorplan/history.ts">aodr</a>({ ...params }) -> void</code>
- <code title="get /udl/sensorplan/history/count">client.sensorplan.history.<a href="./src/resources/sensorplan/history.ts">count</a>({ ...params }) -> string</code>

# Sensortype

Types:

- <code><a href="./src/resources/sensortype.ts">SensortypeListResponse</a></code>
- <code><a href="./src/resources/sensortype.ts">SensortypeGetResponse</a></code>

Methods:

- <code title="get /udl/sensortype">client.sensortype.<a href="./src/resources/sensortype.ts">list</a>() -> SensortypeListResponse</code>
- <code title="get /udl/sensortype/{id}">client.sensortype.<a href="./src/resources/sensortype.ts">get</a>(id) -> SensortypeGetResponse</code>
- <code title="get /udl/sensortype/queryhelp">client.sensortype.<a href="./src/resources/sensortype.ts">queryhelp</a>() -> void</code>

# Seradatacommdetails

Types:

- <code><a href="./src/resources/seradatacommdetails.ts">SeradatacommdetailListResponse</a></code>
- <code><a href="./src/resources/seradatacommdetails.ts">SeradatacommdetailCountResponse</a></code>
- <code><a href="./src/resources/seradatacommdetails.ts">SeradatacommdetailGetResponse</a></code>
- <code><a href="./src/resources/seradatacommdetails.ts">SeradatacommdetailTupleResponse</a></code>

Methods:

- <code title="post /udl/seradatacommdetails">client.seradatacommdetails.<a href="./src/resources/seradatacommdetails.ts">create</a>({ ...params }) -> void</code>
- <code title="put /udl/seradatacommdetails/{id}">client.seradatacommdetails.<a href="./src/resources/seradatacommdetails.ts">update</a>(pathId, { ...params }) -> void</code>
- <code title="get /udl/seradatacommdetails">client.seradatacommdetails.<a href="./src/resources/seradatacommdetails.ts">list</a>() -> SeradatacommdetailListResponse</code>
- <code title="delete /udl/seradatacommdetails/{id}">client.seradatacommdetails.<a href="./src/resources/seradatacommdetails.ts">delete</a>(id) -> void</code>
- <code title="get /udl/seradatacommdetails/count">client.seradatacommdetails.<a href="./src/resources/seradatacommdetails.ts">count</a>() -> string</code>
- <code title="get /udl/seradatacommdetails/{id}">client.seradatacommdetails.<a href="./src/resources/seradatacommdetails.ts">get</a>(id) -> SeradatacommdetailGetResponse</code>
- <code title="get /udl/seradatacommdetails/queryhelp">client.seradatacommdetails.<a href="./src/resources/seradatacommdetails.ts">queryhelp</a>() -> void</code>
- <code title="get /udl/seradatacommdetails/tuple">client.seradatacommdetails.<a href="./src/resources/seradatacommdetails.ts">tuple</a>({ ...params }) -> SeradatacommdetailTupleResponse</code>

# Seradataearlywarning

Types:

- <code><a href="./src/resources/seradataearlywarning.ts">SeradataearlywarningListResponse</a></code>
- <code><a href="./src/resources/seradataearlywarning.ts">SeradataearlywarningCountResponse</a></code>
- <code><a href="./src/resources/seradataearlywarning.ts">SeradataearlywarningGetResponse</a></code>
- <code><a href="./src/resources/seradataearlywarning.ts">SeradataearlywarningTupleResponse</a></code>

Methods:

- <code title="post /udl/seradataearlywarning">client.seradataearlywarning.<a href="./src/resources/seradataearlywarning.ts">create</a>({ ...params }) -> void</code>
- <code title="put /udl/seradataearlywarning/{id}">client.seradataearlywarning.<a href="./src/resources/seradataearlywarning.ts">update</a>(pathId, { ...params }) -> void</code>
- <code title="get /udl/seradataearlywarning">client.seradataearlywarning.<a href="./src/resources/seradataearlywarning.ts">list</a>() -> SeradataearlywarningListResponse</code>
- <code title="delete /udl/seradataearlywarning/{id}">client.seradataearlywarning.<a href="./src/resources/seradataearlywarning.ts">delete</a>(id) -> void</code>
- <code title="get /udl/seradataearlywarning/count">client.seradataearlywarning.<a href="./src/resources/seradataearlywarning.ts">count</a>() -> string</code>
- <code title="get /udl/seradataearlywarning/{id}">client.seradataearlywarning.<a href="./src/resources/seradataearlywarning.ts">get</a>(id) -> SeradataearlywarningGetResponse</code>
- <code title="get /udl/seradataearlywarning/queryhelp">client.seradataearlywarning.<a href="./src/resources/seradataearlywarning.ts">queryhelp</a>() -> void</code>
- <code title="get /udl/seradataearlywarning/tuple">client.seradataearlywarning.<a href="./src/resources/seradataearlywarning.ts">tuple</a>({ ...params }) -> SeradataearlywarningTupleResponse</code>

# Seradatanavigation

Types:

- <code><a href="./src/resources/seradatanavigation.ts">SeradatanavigationListResponse</a></code>
- <code><a href="./src/resources/seradatanavigation.ts">SeradatanavigationCountResponse</a></code>
- <code><a href="./src/resources/seradatanavigation.ts">SeradatanavigationGetResponse</a></code>
- <code><a href="./src/resources/seradatanavigation.ts">SeradatanavigationTupleResponse</a></code>

Methods:

- <code title="post /udl/seradatanavigation">client.seradatanavigation.<a href="./src/resources/seradatanavigation.ts">create</a>({ ...params }) -> void</code>
- <code title="put /udl/seradatanavigation/{id}">client.seradatanavigation.<a href="./src/resources/seradatanavigation.ts">update</a>(pathId, { ...params }) -> void</code>
- <code title="get /udl/seradatanavigation">client.seradatanavigation.<a href="./src/resources/seradatanavigation.ts">list</a>() -> SeradatanavigationListResponse</code>
- <code title="delete /udl/seradatanavigation/{id}">client.seradatanavigation.<a href="./src/resources/seradatanavigation.ts">delete</a>(id) -> void</code>
- <code title="get /udl/seradatanavigation/count">client.seradatanavigation.<a href="./src/resources/seradatanavigation.ts">count</a>() -> string</code>
- <code title="get /udl/seradatanavigation/{id}">client.seradatanavigation.<a href="./src/resources/seradatanavigation.ts">get</a>(id) -> SeradatanavigationGetResponse</code>
- <code title="get /udl/seradatanavigation/queryhelp">client.seradatanavigation.<a href="./src/resources/seradatanavigation.ts">queryhelp</a>() -> void</code>
- <code title="get /udl/seradatanavigation/tuple">client.seradatanavigation.<a href="./src/resources/seradatanavigation.ts">tuple</a>({ ...params }) -> SeradatanavigationTupleResponse</code>

# Seradataopticalpayload

Types:

- <code><a href="./src/resources/seradataopticalpayload.ts">SeradataopticalpayloadListResponse</a></code>
- <code><a href="./src/resources/seradataopticalpayload.ts">SeradataopticalpayloadCountResponse</a></code>
- <code><a href="./src/resources/seradataopticalpayload.ts">SeradataopticalpayloadGetResponse</a></code>
- <code><a href="./src/resources/seradataopticalpayload.ts">SeradataopticalpayloadTupleResponse</a></code>

Methods:

- <code title="post /udl/seradataopticalpayload">client.seradataopticalpayload.<a href="./src/resources/seradataopticalpayload.ts">create</a>({ ...params }) -> void</code>
- <code title="put /udl/seradataopticalpayload/{id}">client.seradataopticalpayload.<a href="./src/resources/seradataopticalpayload.ts">update</a>(pathId, { ...params }) -> void</code>
- <code title="get /udl/seradataopticalpayload">client.seradataopticalpayload.<a href="./src/resources/seradataopticalpayload.ts">list</a>() -> SeradataopticalpayloadListResponse</code>
- <code title="delete /udl/seradataopticalpayload/{id}">client.seradataopticalpayload.<a href="./src/resources/seradataopticalpayload.ts">delete</a>(id) -> void</code>
- <code title="get /udl/seradataopticalpayload/count">client.seradataopticalpayload.<a href="./src/resources/seradataopticalpayload.ts">count</a>() -> string</code>
- <code title="get /udl/seradataopticalpayload/{id}">client.seradataopticalpayload.<a href="./src/resources/seradataopticalpayload.ts">get</a>(id) -> SeradataopticalpayloadGetResponse</code>
- <code title="get /udl/seradataopticalpayload/queryhelp">client.seradataopticalpayload.<a href="./src/resources/seradataopticalpayload.ts">queryhelp</a>() -> void</code>
- <code title="get /udl/seradataopticalpayload/tuple">client.seradataopticalpayload.<a href="./src/resources/seradataopticalpayload.ts">tuple</a>({ ...params }) -> SeradataopticalpayloadTupleResponse</code>

# Seradataradarpayload

Types:

- <code><a href="./src/resources/seradataradarpayload.ts">SeradataradarpayloadListResponse</a></code>
- <code><a href="./src/resources/seradataradarpayload.ts">SeradataradarpayloadCountResponse</a></code>
- <code><a href="./src/resources/seradataradarpayload.ts">SeradataradarpayloadGetResponse</a></code>
- <code><a href="./src/resources/seradataradarpayload.ts">SeradataradarpayloadTupleResponse</a></code>

Methods:

- <code title="post /udl/seradataradarpayload">client.seradataradarpayload.<a href="./src/resources/seradataradarpayload.ts">create</a>({ ...params }) -> void</code>
- <code title="put /udl/seradataradarpayload/{id}">client.seradataradarpayload.<a href="./src/resources/seradataradarpayload.ts">update</a>(pathId, { ...params }) -> void</code>
- <code title="get /udl/seradataradarpayload">client.seradataradarpayload.<a href="./src/resources/seradataradarpayload.ts">list</a>() -> SeradataradarpayloadListResponse</code>
- <code title="delete /udl/seradataradarpayload/{id}">client.seradataradarpayload.<a href="./src/resources/seradataradarpayload.ts">delete</a>(id) -> void</code>
- <code title="get /udl/seradataradarpayload/count">client.seradataradarpayload.<a href="./src/resources/seradataradarpayload.ts">count</a>() -> string</code>
- <code title="get /udl/seradataradarpayload/{id}">client.seradataradarpayload.<a href="./src/resources/seradataradarpayload.ts">get</a>(id) -> SeradataradarpayloadGetResponse</code>
- <code title="get /udl/seradataradarpayload/queryhelp">client.seradataradarpayload.<a href="./src/resources/seradataradarpayload.ts">queryhelp</a>() -> void</code>
- <code title="get /udl/seradataradarpayload/tuple">client.seradataradarpayload.<a href="./src/resources/seradataradarpayload.ts">tuple</a>({ ...params }) -> SeradataradarpayloadTupleResponse</code>

# Seradatasigintpayload

Types:

- <code><a href="./src/resources/seradatasigintpayload.ts">SeradatasigintpayloadListResponse</a></code>
- <code><a href="./src/resources/seradatasigintpayload.ts">SeradatasigintpayloadCountResponse</a></code>
- <code><a href="./src/resources/seradatasigintpayload.ts">SeradatasigintpayloadGetResponse</a></code>
- <code><a href="./src/resources/seradatasigintpayload.ts">SeradatasigintpayloadTupleResponse</a></code>

Methods:

- <code title="post /udl/seradatasigintpayload">client.seradatasigintpayload.<a href="./src/resources/seradatasigintpayload.ts">create</a>({ ...params }) -> void</code>
- <code title="put /udl/seradatasigintpayload/{id}">client.seradatasigintpayload.<a href="./src/resources/seradatasigintpayload.ts">update</a>(pathId, { ...params }) -> void</code>
- <code title="get /udl/seradatasigintpayload">client.seradatasigintpayload.<a href="./src/resources/seradatasigintpayload.ts">list</a>() -> SeradatasigintpayloadListResponse</code>
- <code title="delete /udl/seradatasigintpayload/{id}">client.seradatasigintpayload.<a href="./src/resources/seradatasigintpayload.ts">delete</a>(id) -> void</code>
- <code title="get /udl/seradatasigintpayload/count">client.seradatasigintpayload.<a href="./src/resources/seradatasigintpayload.ts">count</a>() -> string</code>
- <code title="get /udl/seradatasigintpayload/{id}">client.seradatasigintpayload.<a href="./src/resources/seradatasigintpayload.ts">get</a>(id) -> SeradatasigintpayloadGetResponse</code>
- <code title="get /udl/seradatasigintpayload/queryhelp">client.seradatasigintpayload.<a href="./src/resources/seradatasigintpayload.ts">queryhelp</a>() -> void</code>
- <code title="get /udl/seradatasigintpayload/tuple">client.seradatasigintpayload.<a href="./src/resources/seradatasigintpayload.ts">tuple</a>({ ...params }) -> SeradatasigintpayloadTupleResponse</code>

# Seradataspacecraftdetails

Types:

- <code><a href="./src/resources/seradataspacecraftdetails.ts">SeradataspacecraftdetailListResponse</a></code>
- <code><a href="./src/resources/seradataspacecraftdetails.ts">SeradataspacecraftdetailCountResponse</a></code>
- <code><a href="./src/resources/seradataspacecraftdetails.ts">SeradataspacecraftdetailGetResponse</a></code>
- <code><a href="./src/resources/seradataspacecraftdetails.ts">SeradataspacecraftdetailTupleResponse</a></code>

Methods:

- <code title="post /udl/seradataspacecraftdetails">client.seradataspacecraftdetails.<a href="./src/resources/seradataspacecraftdetails.ts">create</a>({ ...params }) -> void</code>
- <code title="put /udl/seradataspacecraftdetails/{id}">client.seradataspacecraftdetails.<a href="./src/resources/seradataspacecraftdetails.ts">update</a>(pathId, { ...params }) -> void</code>
- <code title="get /udl/seradataspacecraftdetails">client.seradataspacecraftdetails.<a href="./src/resources/seradataspacecraftdetails.ts">list</a>() -> SeradataspacecraftdetailListResponse</code>
- <code title="delete /udl/seradataspacecraftdetails/{id}">client.seradataspacecraftdetails.<a href="./src/resources/seradataspacecraftdetails.ts">delete</a>(id) -> void</code>
- <code title="get /udl/seradataspacecraftdetails/count">client.seradataspacecraftdetails.<a href="./src/resources/seradataspacecraftdetails.ts">count</a>() -> string</code>
- <code title="get /udl/seradataspacecraftdetails/{id}">client.seradataspacecraftdetails.<a href="./src/resources/seradataspacecraftdetails.ts">get</a>(id) -> SeradataspacecraftdetailGetResponse</code>
- <code title="get /udl/seradataspacecraftdetails/queryhelp">client.seradataspacecraftdetails.<a href="./src/resources/seradataspacecraftdetails.ts">queryhelp</a>() -> void</code>
- <code title="get /udl/seradataspacecraftdetails/tuple">client.seradataspacecraftdetails.<a href="./src/resources/seradataspacecraftdetails.ts">tuple</a>({ ...params }) -> SeradataspacecraftdetailTupleResponse</code>

# Sgi

Types:

- <code><a href="./src/resources/sgi/sgi.ts">SgiListResponse</a></code>
- <code><a href="./src/resources/sgi/sgi.ts">SgiCountResponse</a></code>
- <code><a href="./src/resources/sgi/sgi.ts">SgiTupleResponse</a></code>

Methods:

- <code title="post /udl/sgi">client.sgi.<a href="./src/resources/sgi/sgi.ts">create</a>({ ...params }) -> void</code>
- <code title="put /udl/sgi/{id}">client.sgi.<a href="./src/resources/sgi/sgi.ts">update</a>(pathId, { ...params }) -> void</code>
- <code title="get /udl/sgi">client.sgi.<a href="./src/resources/sgi/sgi.ts">list</a>({ ...params }) -> SgiListResponse</code>
- <code title="delete /udl/sgi/{id}">client.sgi.<a href="./src/resources/sgi/sgi.ts">delete</a>(id) -> void</code>
- <code title="get /udl/sgi/count">client.sgi.<a href="./src/resources/sgi/sgi.ts">count</a>({ ...params }) -> string</code>
- <code title="post /udl/sgi/createBulk">client.sgi.<a href="./src/resources/sgi/sgi.ts">createBulk</a>([ ...body ]) -> void</code>
- <code title="post /filedrop/udl-sgi">client.sgi.<a href="./src/resources/sgi/sgi.ts">createBulkV2</a>([ ...body ]) -> void</code>
- <code title="get /udl/sgi/{id}">client.sgi.<a href="./src/resources/sgi/sgi.ts">get</a>(id) -> SgiFull</code>
- <code title="get /udl/sgi/getSGIDataByEffectiveAsOfDate">client.sgi.<a href="./src/resources/sgi/sgi.ts">getDataByEffectiveAsOfDate</a>({ ...params }) -> SgiFull</code>
- <code title="get /udl/sgi/queryhelp">client.sgi.<a href="./src/resources/sgi/sgi.ts">queryhelp</a>() -> void</code>
- <code title="get /udl/sgi/tuple">client.sgi.<a href="./src/resources/sgi/sgi.ts">tuple</a>({ ...params }) -> SgiTupleResponse</code>

## History

Types:

- <code><a href="./src/resources/sgi/history.ts">HistoryListResponse</a></code>
- <code><a href="./src/resources/sgi/history.ts">HistoryCountResponse</a></code>

Methods:

- <code title="get /udl/sgi/history">client.sgi.history.<a href="./src/resources/sgi/history.ts">list</a>({ ...params }) -> HistoryListResponse</code>
- <code title="get /udl/sgi/history/aodr">client.sgi.history.<a href="./src/resources/sgi/history.ts">aodr</a>({ ...params }) -> void</code>
- <code title="get /udl/sgi/history/count">client.sgi.history.<a href="./src/resources/sgi/history.ts">count</a>({ ...params }) -> string</code>

# Sigact

Types:

- <code><a href="./src/resources/sigact/sigact.ts">SigactListResponse</a></code>
- <code><a href="./src/resources/sigact/sigact.ts">SigactCountResponse</a></code>
- <code><a href="./src/resources/sigact/sigact.ts">SigactTupleResponse</a></code>

Methods:

- <code title="get /udl/sigact">client.sigact.<a href="./src/resources/sigact/sigact.ts">list</a>({ ...params }) -> SigactListResponse</code>
- <code title="get /udl/sigact/count">client.sigact.<a href="./src/resources/sigact/sigact.ts">count</a>({ ...params }) -> string</code>
- <code title="post /udl/sigact/createBulk">client.sigact.<a href="./src/resources/sigact/sigact.ts">createBulk</a>([ ...body ]) -> void</code>
- <code title="get /udl/sigact/queryhelp">client.sigact.<a href="./src/resources/sigact/sigact.ts">queryhelp</a>() -> void</code>
- <code title="get /udl/sigact/tuple">client.sigact.<a href="./src/resources/sigact/sigact.ts">tuple</a>({ ...params }) -> SigactTupleResponse</code>
- <code title="post /filedrop/udl-sigact-text">client.sigact.<a href="./src/resources/sigact/sigact.ts">uploadZip</a>({ ...params }) -> void</code>

## History

Types:

- <code><a href="./src/resources/sigact/history.ts">HistoryListResponse</a></code>
- <code><a href="./src/resources/sigact/history.ts">HistoryCountResponse</a></code>

Methods:

- <code title="get /udl/sigact/history">client.sigact.history.<a href="./src/resources/sigact/history.ts">list</a>({ ...params }) -> HistoryListResponse</code>
- <code title="get /udl/sigact/history/count">client.sigact.history.<a href="./src/resources/sigact/history.ts">count</a>({ ...params }) -> string</code>

# Site

Types:

- <code><a href="./src/resources/site/site.ts">SiteListResponse</a></code>
- <code><a href="./src/resources/site/site.ts">SiteCountResponse</a></code>
- <code><a href="./src/resources/site/site.ts">SiteGetResponse</a></code>
- <code><a href="./src/resources/site/site.ts">SiteTupleResponse</a></code>

Methods:

- <code title="post /udl/site">client.site.<a href="./src/resources/site/site.ts">create</a>({ ...params }) -> void</code>
- <code title="put /udl/site/{id}">client.site.<a href="./src/resources/site/site.ts">update</a>(pathId, { ...params }) -> void</code>
- <code title="get /udl/site">client.site.<a href="./src/resources/site/site.ts">list</a>() -> SiteListResponse</code>
- <code title="get /udl/site/count">client.site.<a href="./src/resources/site/site.ts">count</a>() -> string</code>
- <code title="get /udl/site/{id}">client.site.<a href="./src/resources/site/site.ts">get</a>(id) -> SiteGetResponse</code>
- <code title="get /udl/site/queryhelp">client.site.<a href="./src/resources/site/site.ts">queryhelp</a>() -> void</code>
- <code title="get /udl/site/tuple">client.site.<a href="./src/resources/site/site.ts">tuple</a>({ ...params }) -> SiteTupleResponse</code>

## Operations

Types:

- <code><a href="./src/resources/site/operations.ts">OperationRetrieveResponse</a></code>
- <code><a href="./src/resources/site/operations.ts">OperationListResponse</a></code>
- <code><a href="./src/resources/site/operations.ts">OperationCountResponse</a></code>
- <code><a href="./src/resources/site/operations.ts">OperationTupleResponse</a></code>

Methods:

- <code title="post /udl/siteoperations">client.site.operations.<a href="./src/resources/site/operations.ts">create</a>({ ...params }) -> void</code>
- <code title="get /udl/siteoperations/{id}">client.site.operations.<a href="./src/resources/site/operations.ts">retrieve</a>(id) -> OperationRetrieveResponse</code>
- <code title="put /udl/siteoperations/{id}">client.site.operations.<a href="./src/resources/site/operations.ts">update</a>(pathId, { ...params }) -> void</code>
- <code title="get /udl/siteoperations">client.site.operations.<a href="./src/resources/site/operations.ts">list</a>({ ...params }) -> OperationListResponse</code>
- <code title="delete /udl/siteoperations/{id}">client.site.operations.<a href="./src/resources/site/operations.ts">delete</a>(id) -> void</code>
- <code title="get /udl/siteoperations/count">client.site.operations.<a href="./src/resources/site/operations.ts">count</a>({ ...params }) -> string</code>
- <code title="post /udl/siteoperations/createBulk">client.site.operations.<a href="./src/resources/site/operations.ts">createBulk</a>([ ...body ]) -> void</code>
- <code title="post /filedrop/udl-siteoperations">client.site.operations.<a href="./src/resources/site/operations.ts">createBulkV2</a>([ ...body ]) -> void</code>
- <code title="get /udl/siteoperations/queryhelp">client.site.operations.<a href="./src/resources/site/operations.ts">queryHelp</a>() -> void</code>
- <code title="get /udl/siteoperations/tuple">client.site.operations.<a href="./src/resources/site/operations.ts">tuple</a>({ ...params }) -> OperationTupleResponse</code>

# Siteremark

Types:

- <code><a href="./src/resources/siteremark.ts">SiteremarkListResponse</a></code>
- <code><a href="./src/resources/siteremark.ts">SiteremarkCountResponse</a></code>
- <code><a href="./src/resources/siteremark.ts">SiteremarkGetResponse</a></code>
- <code><a href="./src/resources/siteremark.ts">SiteremarkTupleResponse</a></code>

Methods:

- <code title="post /udl/siteremark">client.siteremark.<a href="./src/resources/siteremark.ts">create</a>({ ...params }) -> void</code>
- <code title="get /udl/siteremark">client.siteremark.<a href="./src/resources/siteremark.ts">list</a>() -> SiteremarkListResponse</code>
- <code title="get /udl/siteremark/count">client.siteremark.<a href="./src/resources/siteremark.ts">count</a>() -> string</code>
- <code title="get /udl/siteremark/{id}">client.siteremark.<a href="./src/resources/siteremark.ts">get</a>(id) -> SiteremarkGetResponse</code>
- <code title="get /udl/siteremark/queryhelp">client.siteremark.<a href="./src/resources/siteremark.ts">queryhelp</a>() -> void</code>
- <code title="get /udl/siteremark/tuple">client.siteremark.<a href="./src/resources/siteremark.ts">tuple</a>({ ...params }) -> SiteremarkTupleResponse</code>

# Sitestatus

Types:

- <code><a href="./src/resources/sitestatus/sitestatus.ts">SitestatusListResponse</a></code>
- <code><a href="./src/resources/sitestatus/sitestatus.ts">SitestatusCountResponse</a></code>
- <code><a href="./src/resources/sitestatus/sitestatus.ts">SitestatusTupleResponse</a></code>

Methods:

- <code title="post /udl/sitestatus">client.sitestatus.<a href="./src/resources/sitestatus/sitestatus.ts">create</a>({ ...params }) -> void</code>
- <code title="put /udl/sitestatus/{id}">client.sitestatus.<a href="./src/resources/sitestatus/sitestatus.ts">update</a>(pathId, { ...params }) -> void</code>
- <code title="get /udl/sitestatus">client.sitestatus.<a href="./src/resources/sitestatus/sitestatus.ts">list</a>() -> SitestatusListResponse</code>
- <code title="delete /udl/sitestatus/{id}">client.sitestatus.<a href="./src/resources/sitestatus/sitestatus.ts">delete</a>(id) -> void</code>
- <code title="get /udl/sitestatus/count">client.sitestatus.<a href="./src/resources/sitestatus/sitestatus.ts">count</a>() -> string</code>
- <code title="get /udl/sitestatus/{id}">client.sitestatus.<a href="./src/resources/sitestatus/sitestatus.ts">get</a>(id) -> SitestatusFull</code>
- <code title="get /udl/sitestatus/queryhelp">client.sitestatus.<a href="./src/resources/sitestatus/sitestatus.ts">queryhelp</a>() -> void</code>
- <code title="get /udl/sitestatus/tuple">client.sitestatus.<a href="./src/resources/sitestatus/sitestatus.ts">tuple</a>({ ...params }) -> SitestatusTupleResponse</code>

## History

Types:

- <code><a href="./src/resources/sitestatus/history.ts">HistoryListResponse</a></code>
- <code><a href="./src/resources/sitestatus/history.ts">HistoryCountResponse</a></code>

Methods:

- <code title="get /udl/sitestatus/history">client.sitestatus.history.<a href="./src/resources/sitestatus/history.ts">list</a>({ ...params }) -> HistoryListResponse</code>
- <code title="get /udl/sitestatus/history/count">client.sitestatus.history.<a href="./src/resources/sitestatus/history.ts">count</a>() -> string</code>

# Skyimagery

Types:

- <code><a href="./src/resources/skyimagery/skyimagery.ts">SkyimageryListResponse</a></code>
- <code><a href="./src/resources/skyimagery/skyimagery.ts">SkyimageryCountResponse</a></code>
- <code><a href="./src/resources/skyimagery/skyimagery.ts">SkyimageryTupleResponse</a></code>

Methods:

- <code title="get /udl/skyimagery">client.skyimagery.<a href="./src/resources/skyimagery/skyimagery.ts">list</a>({ ...params }) -> SkyimageryListResponse</code>
- <code title="get /udl/skyimagery/count">client.skyimagery.<a href="./src/resources/skyimagery/skyimagery.ts">count</a>({ ...params }) -> string</code>
- <code title="get /udl/skyimagery/getFile/{id}">client.skyimagery.<a href="./src/resources/skyimagery/skyimagery.ts">fileGet</a>(id) -> Response</code>
- <code title="get /udl/skyimagery/{id}">client.skyimagery.<a href="./src/resources/skyimagery/skyimagery.ts">get</a>(id) -> SkyimageryFull</code>
- <code title="get /udl/skyimagery/queryhelp">client.skyimagery.<a href="./src/resources/skyimagery/skyimagery.ts">queryhelp</a>() -> void</code>
- <code title="get /udl/skyimagery/tuple">client.skyimagery.<a href="./src/resources/skyimagery/skyimagery.ts">tuple</a>({ ...params }) -> SkyimageryTupleResponse</code>
- <code title="post /filedrop/udl-skyimagery">client.skyimagery.<a href="./src/resources/skyimagery/skyimagery.ts">uploadZip</a>({ ...params }) -> void</code>

## History

Types:

- <code><a href="./src/resources/skyimagery/history.ts">HistoryListResponse</a></code>
- <code><a href="./src/resources/skyimagery/history.ts">HistoryCountResponse</a></code>

Methods:

- <code title="get /udl/skyimagery/history">client.skyimagery.history.<a href="./src/resources/skyimagery/history.ts">list</a>({ ...params }) -> HistoryListResponse</code>
- <code title="get /udl/skyimagery/history/aodr">client.skyimagery.history.<a href="./src/resources/skyimagery/history.ts">aodr</a>({ ...params }) -> void</code>
- <code title="get /udl/skyimagery/history/count">client.skyimagery.history.<a href="./src/resources/skyimagery/history.ts">count</a>({ ...params }) -> string</code>

# Soiobservationset

Types:

- <code><a href="./src/resources/soiobservationset/soiobservationset.ts">SoiobservationsetListResponse</a></code>
- <code><a href="./src/resources/soiobservationset/soiobservationset.ts">SoiobservationsetCountResponse</a></code>
- <code><a href="./src/resources/soiobservationset/soiobservationset.ts">SoiobservationsetTupleResponse</a></code>

Methods:

- <code title="post /udl/soiobservationset">client.soiobservationset.<a href="./src/resources/soiobservationset/soiobservationset.ts">create</a>({ ...params }) -> void</code>
- <code title="get /udl/soiobservationset">client.soiobservationset.<a href="./src/resources/soiobservationset/soiobservationset.ts">list</a>({ ...params }) -> SoiobservationsetListResponse</code>
- <code title="get /udl/soiobservationset/count">client.soiobservationset.<a href="./src/resources/soiobservationset/soiobservationset.ts">count</a>({ ...params }) -> string</code>
- <code title="post /udl/soiobservationset/createBulk">client.soiobservationset.<a href="./src/resources/soiobservationset/soiobservationset.ts">createBulk</a>([ ...body ]) -> void</code>
- <code title="post /filedrop/udl-soiobservationset">client.soiobservationset.<a href="./src/resources/soiobservationset/soiobservationset.ts">createBulkV2</a>([ ...body ]) -> void</code>
- <code title="get /udl/soiobservationset/{id}">client.soiobservationset.<a href="./src/resources/soiobservationset/soiobservationset.ts">get</a>(id) -> SoiObservationSetFull</code>
- <code title="get /udl/soiobservationset/queryhelp">client.soiobservationset.<a href="./src/resources/soiobservationset/soiobservationset.ts">queryhelp</a>() -> void</code>
- <code title="get /udl/soiobservationset/tuple">client.soiobservationset.<a href="./src/resources/soiobservationset/soiobservationset.ts">tuple</a>({ ...params }) -> SoiobservationsetTupleResponse</code>

## History

Types:

- <code><a href="./src/resources/soiobservationset/history.ts">SoiObservationSetFull</a></code>
- <code><a href="./src/resources/soiobservationset/history.ts">HistoryListResponse</a></code>
- <code><a href="./src/resources/soiobservationset/history.ts">HistoryCountResponse</a></code>

Methods:

- <code title="get /udl/soiobservationset/history">client.soiobservationset.history.<a href="./src/resources/soiobservationset/history.ts">list</a>({ ...params }) -> HistoryListResponse</code>
- <code title="get /udl/soiobservationset/history/aodr">client.soiobservationset.history.<a href="./src/resources/soiobservationset/history.ts">aodr</a>({ ...params }) -> void</code>
- <code title="get /udl/soiobservationset/history/count">client.soiobservationset.history.<a href="./src/resources/soiobservationset/history.ts">count</a>({ ...params }) -> string</code>

# Solararray

Types:

- <code><a href="./src/resources/solararray.ts">SolararrayListResponse</a></code>
- <code><a href="./src/resources/solararray.ts">SolararrayCountResponse</a></code>
- <code><a href="./src/resources/solararray.ts">SolararrayGetResponse</a></code>
- <code><a href="./src/resources/solararray.ts">SolararrayTupleResponse</a></code>

Methods:

- <code title="post /udl/solararray">client.solararray.<a href="./src/resources/solararray.ts">create</a>({ ...params }) -> void</code>
- <code title="put /udl/solararray/{id}">client.solararray.<a href="./src/resources/solararray.ts">update</a>(pathId, { ...params }) -> void</code>
- <code title="get /udl/solararray">client.solararray.<a href="./src/resources/solararray.ts">list</a>() -> SolararrayListResponse</code>
- <code title="delete /udl/solararray/{id}">client.solararray.<a href="./src/resources/solararray.ts">delete</a>(id) -> void</code>
- <code title="get /udl/solararray/count">client.solararray.<a href="./src/resources/solararray.ts">count</a>() -> string</code>
- <code title="get /udl/solararray/{id}">client.solararray.<a href="./src/resources/solararray.ts">get</a>(id) -> SolararrayGetResponse</code>
- <code title="get /udl/solararray/queryhelp">client.solararray.<a href="./src/resources/solararray.ts">queryhelp</a>() -> void</code>
- <code title="get /udl/solararray/tuple">client.solararray.<a href="./src/resources/solararray.ts">tuple</a>({ ...params }) -> SolararrayTupleResponse</code>

# Solararraydetails

Types:

- <code><a href="./src/resources/solararraydetails.ts">SolarArrayDetailsFull</a></code>
- <code><a href="./src/resources/solararraydetails.ts">SolararraydetailListResponse</a></code>

Methods:

- <code title="post /udl/solararraydetails">client.solararraydetails.<a href="./src/resources/solararraydetails.ts">create</a>({ ...params }) -> void</code>
- <code title="put /udl/solararraydetails/{id}">client.solararraydetails.<a href="./src/resources/solararraydetails.ts">update</a>(pathId, { ...params }) -> void</code>
- <code title="get /udl/solararraydetails">client.solararraydetails.<a href="./src/resources/solararraydetails.ts">list</a>({ ...params }) -> SolararraydetailListResponse</code>
- <code title="delete /udl/solararraydetails/{id}">client.solararraydetails.<a href="./src/resources/solararraydetails.ts">delete</a>(id) -> void</code>
- <code title="get /udl/solararraydetails/{id}">client.solararraydetails.<a href="./src/resources/solararraydetails.ts">get</a>(id) -> SolarArrayDetailsFull</code>

# Sortieppr

Types:

- <code><a href="./src/resources/sortieppr/sortieppr.ts">SortiepprListResponse</a></code>
- <code><a href="./src/resources/sortieppr/sortieppr.ts">SortiepprCountResponse</a></code>
- <code><a href="./src/resources/sortieppr/sortieppr.ts">SortiepprTupleResponse</a></code>

Methods:

- <code title="post /udl/sortieppr">client.sortieppr.<a href="./src/resources/sortieppr/sortieppr.ts">create</a>({ ...params }) -> void</code>
- <code title="put /udl/sortieppr/{id}">client.sortieppr.<a href="./src/resources/sortieppr/sortieppr.ts">update</a>(pathId, { ...params }) -> void</code>
- <code title="get /udl/sortieppr">client.sortieppr.<a href="./src/resources/sortieppr/sortieppr.ts">list</a>({ ...params }) -> SortiepprListResponse</code>
- <code title="delete /udl/sortieppr/{id}">client.sortieppr.<a href="./src/resources/sortieppr/sortieppr.ts">delete</a>(id) -> void</code>
- <code title="get /udl/sortieppr/count">client.sortieppr.<a href="./src/resources/sortieppr/sortieppr.ts">count</a>({ ...params }) -> string</code>
- <code title="post /udl/sortieppr/createBulk">client.sortieppr.<a href="./src/resources/sortieppr/sortieppr.ts">createBulk</a>([ ...body ]) -> void</code>
- <code title="post /filedrop/udl-sortieppr">client.sortieppr.<a href="./src/resources/sortieppr/sortieppr.ts">createBulkV2</a>([ ...body ]) -> void</code>
- <code title="get /udl/sortieppr/{id}">client.sortieppr.<a href="./src/resources/sortieppr/sortieppr.ts">get</a>(id) -> SortiePprFull</code>
- <code title="get /udl/sortieppr/queryhelp">client.sortieppr.<a href="./src/resources/sortieppr/sortieppr.ts">queryhelp</a>() -> void</code>
- <code title="get /udl/sortieppr/tuple">client.sortieppr.<a href="./src/resources/sortieppr/sortieppr.ts">tuple</a>({ ...params }) -> SortiepprTupleResponse</code>

## History

Types:

- <code><a href="./src/resources/sortieppr/history.ts">SortiePprFull</a></code>
- <code><a href="./src/resources/sortieppr/history.ts">HistoryListResponse</a></code>
- <code><a href="./src/resources/sortieppr/history.ts">HistoryCountResponse</a></code>

Methods:

- <code title="get /udl/sortieppr/history">client.sortieppr.history.<a href="./src/resources/sortieppr/history.ts">list</a>({ ...params }) -> HistoryListResponse</code>
- <code title="get /udl/sortieppr/history/aodr">client.sortieppr.history.<a href="./src/resources/sortieppr/history.ts">aodr</a>({ ...params }) -> void</code>
- <code title="get /udl/sortieppr/history/count">client.sortieppr.history.<a href="./src/resources/sortieppr/history.ts">count</a>({ ...params }) -> string</code>

# Spaceenvobservation

Types:

- <code><a href="./src/resources/spaceenvobservation/spaceenvobservation.ts">SpaceenvobservationListResponse</a></code>
- <code><a href="./src/resources/spaceenvobservation/spaceenvobservation.ts">SpaceenvobservationCountResponse</a></code>
- <code><a href="./src/resources/spaceenvobservation/spaceenvobservation.ts">SpaceenvobservationTupleResponse</a></code>

Methods:

- <code title="get /udl/spaceenvobservation">client.spaceenvobservation.<a href="./src/resources/spaceenvobservation/spaceenvobservation.ts">list</a>({ ...params }) -> SpaceenvobservationListResponse</code>
- <code title="get /udl/spaceenvobservation/count">client.spaceenvobservation.<a href="./src/resources/spaceenvobservation/spaceenvobservation.ts">count</a>({ ...params }) -> string</code>
- <code title="post /udl/spaceenvobservation/createBulk">client.spaceenvobservation.<a href="./src/resources/spaceenvobservation/spaceenvobservation.ts">createBulk</a>([ ...body ]) -> void</code>
- <code title="post /filedrop/udl-spaceenvobs">client.spaceenvobservation.<a href="./src/resources/spaceenvobservation/spaceenvobservation.ts">createBulkV2</a>([ ...body ]) -> void</code>
- <code title="get /udl/spaceenvobservation/queryhelp">client.spaceenvobservation.<a href="./src/resources/spaceenvobservation/spaceenvobservation.ts">queryhelp</a>() -> void</code>
- <code title="get /udl/spaceenvobservation/tuple">client.spaceenvobservation.<a href="./src/resources/spaceenvobservation/spaceenvobservation.ts">tuple</a>({ ...params }) -> SpaceenvobservationTupleResponse</code>

## History

Types:

- <code><a href="./src/resources/spaceenvobservation/history.ts">SpaceEnvObservationFull</a></code>
- <code><a href="./src/resources/spaceenvobservation/history.ts">HistoryListResponse</a></code>
- <code><a href="./src/resources/spaceenvobservation/history.ts">HistoryCountResponse</a></code>

Methods:

- <code title="get /udl/spaceenvobservation/history">client.spaceenvobservation.history.<a href="./src/resources/spaceenvobservation/history.ts">list</a>({ ...params }) -> HistoryListResponse</code>
- <code title="get /udl/spaceenvobservation/history/aodr">client.spaceenvobservation.history.<a href="./src/resources/spaceenvobservation/history.ts">aodr</a>({ ...params }) -> void</code>
- <code title="get /udl/spaceenvobservation/history/count">client.spaceenvobservation.history.<a href="./src/resources/spaceenvobservation/history.ts">count</a>({ ...params }) -> string</code>

# Stage

Types:

- <code><a href="./src/resources/stage.ts">StageListResponse</a></code>
- <code><a href="./src/resources/stage.ts">StageCountResponse</a></code>
- <code><a href="./src/resources/stage.ts">StageGetResponse</a></code>
- <code><a href="./src/resources/stage.ts">StageTupleResponse</a></code>

Methods:

- <code title="post /udl/stage">client.stage.<a href="./src/resources/stage.ts">create</a>({ ...params }) -> void</code>
- <code title="put /udl/stage/{id}">client.stage.<a href="./src/resources/stage.ts">update</a>(pathId, { ...params }) -> void</code>
- <code title="get /udl/stage">client.stage.<a href="./src/resources/stage.ts">list</a>() -> StageListResponse</code>
- <code title="delete /udl/stage/{id}">client.stage.<a href="./src/resources/stage.ts">delete</a>(id) -> void</code>
- <code title="get /udl/stage/count">client.stage.<a href="./src/resources/stage.ts">count</a>() -> string</code>
- <code title="get /udl/stage/{id}">client.stage.<a href="./src/resources/stage.ts">get</a>(id) -> StageGetResponse</code>
- <code title="get /udl/stage/queryhelp">client.stage.<a href="./src/resources/stage.ts">queryhelp</a>() -> void</code>
- <code title="get /udl/stage/tuple">client.stage.<a href="./src/resources/stage.ts">tuple</a>({ ...params }) -> StageTupleResponse</code>

# Starcatalog

Types:

- <code><a href="./src/resources/starcatalog/starcatalog.ts">StarcatalogListResponse</a></code>
- <code><a href="./src/resources/starcatalog/starcatalog.ts">StarcatalogCountResponse</a></code>
- <code><a href="./src/resources/starcatalog/starcatalog.ts">StarcatalogGetResponse</a></code>
- <code><a href="./src/resources/starcatalog/starcatalog.ts">StarcatalogTupleResponse</a></code>

Methods:

- <code title="post /udl/starcatalog">client.starcatalog.<a href="./src/resources/starcatalog/starcatalog.ts">create</a>({ ...params }) -> void</code>
- <code title="put /udl/starcatalog/{id}">client.starcatalog.<a href="./src/resources/starcatalog/starcatalog.ts">update</a>(pathId, { ...params }) -> void</code>
- <code title="get /udl/starcatalog">client.starcatalog.<a href="./src/resources/starcatalog/starcatalog.ts">list</a>({ ...params }) -> StarcatalogListResponse</code>
- <code title="delete /udl/starcatalog/{id}">client.starcatalog.<a href="./src/resources/starcatalog/starcatalog.ts">delete</a>(id) -> void</code>
- <code title="get /udl/starcatalog/count">client.starcatalog.<a href="./src/resources/starcatalog/starcatalog.ts">count</a>({ ...params }) -> string</code>
- <code title="post /udl/starcatalog/createBulk">client.starcatalog.<a href="./src/resources/starcatalog/starcatalog.ts">createBulk</a>([ ...body ]) -> void</code>
- <code title="post /filedrop/udl-starcatalog">client.starcatalog.<a href="./src/resources/starcatalog/starcatalog.ts">createBulkV2</a>([ ...body ]) -> void</code>
- <code title="get /udl/starcatalog/{id}">client.starcatalog.<a href="./src/resources/starcatalog/starcatalog.ts">get</a>(id) -> StarcatalogGetResponse</code>
- <code title="get /udl/starcatalog/queryhelp">client.starcatalog.<a href="./src/resources/starcatalog/starcatalog.ts">queryhelp</a>() -> void</code>
- <code title="get /udl/starcatalog/tuple">client.starcatalog.<a href="./src/resources/starcatalog/starcatalog.ts">tuple</a>({ ...params }) -> StarcatalogTupleResponse</code>

## History

Methods:

- <code title="get /udl/starcatalog/history/aodr">client.starcatalog.history.<a href="./src/resources/starcatalog/history.ts">aodr</a>({ ...params }) -> void</code>

# Statevector

Types:

- <code><a href="./src/resources/statevector/statevector.ts">StateVectorAbridged</a></code>
- <code><a href="./src/resources/statevector/statevector.ts">StateVectorFull</a></code>
- <code><a href="./src/resources/statevector/statevector.ts">StateVectorIngest</a></code>
- <code><a href="./src/resources/statevector/statevector.ts">StatevectorListResponse</a></code>
- <code><a href="./src/resources/statevector/statevector.ts">StatevectorCountResponse</a></code>
- <code><a href="./src/resources/statevector/statevector.ts">StatevectorTupleResponse</a></code>

Methods:

- <code title="post /udl/statevector">client.statevector.<a href="./src/resources/statevector/statevector.ts">create</a>({ ...params }) -> void</code>
- <code title="get /udl/statevector">client.statevector.<a href="./src/resources/statevector/statevector.ts">list</a>({ ...params }) -> StatevectorListResponse</code>
- <code title="get /udl/statevector/count">client.statevector.<a href="./src/resources/statevector/statevector.ts">count</a>({ ...params }) -> string</code>
- <code title="post /udl/statevector/createBulk">client.statevector.<a href="./src/resources/statevector/statevector.ts">createBulk</a>([ ...body ]) -> void</code>
- <code title="post /filedrop/udl-sv">client.statevector.<a href="./src/resources/statevector/statevector.ts">createBulkV2</a>([ ...body ]) -> void</code>
- <code title="get /udl/statevector/{id}">client.statevector.<a href="./src/resources/statevector/statevector.ts">get</a>(id) -> StateVectorFull</code>
- <code title="get /udl/statevector/queryhelp">client.statevector.<a href="./src/resources/statevector/statevector.ts">queryhelp</a>() -> void</code>
- <code title="get /udl/statevector/tuple">client.statevector.<a href="./src/resources/statevector/statevector.ts">tuple</a>({ ...params }) -> StatevectorTupleResponse</code>

## History

Types:

- <code><a href="./src/resources/statevector/history.ts">HistoryListResponse</a></code>
- <code><a href="./src/resources/statevector/history.ts">HistoryCountResponse</a></code>

Methods:

- <code title="get /udl/statevector/history">client.statevector.history.<a href="./src/resources/statevector/history.ts">list</a>({ ...params }) -> HistoryListResponse</code>
- <code title="get /udl/statevector/history/aodr">client.statevector.history.<a href="./src/resources/statevector/history.ts">aodr</a>({ ...params }) -> void</code>
- <code title="get /udl/statevector/history/count">client.statevector.history.<a href="./src/resources/statevector/history.ts">count</a>({ ...params }) -> string</code>

## Current

Types:

- <code><a href="./src/resources/statevector/current.ts">CurrentListResponse</a></code>
- <code><a href="./src/resources/statevector/current.ts">CurrentTupleResponse</a></code>

Methods:

- <code title="get /udl/statevector/current">client.statevector.current.<a href="./src/resources/statevector/current.ts">list</a>() -> CurrentListResponse</code>
- <code title="get /udl/statevector/current/tuple">client.statevector.current.<a href="./src/resources/statevector/current.ts">tuple</a>({ ...params }) -> CurrentTupleResponse</code>

# Status

Types:

- <code><a href="./src/resources/status.ts">StatusListResponse</a></code>
- <code><a href="./src/resources/status.ts">StatusCountResponse</a></code>
- <code><a href="./src/resources/status.ts">StatusGetResponse</a></code>
- <code><a href="./src/resources/status.ts">StatusGetByEntityIDResponse</a></code>
- <code><a href="./src/resources/status.ts">StatusGetByEntityTypeResponse</a></code>
- <code><a href="./src/resources/status.ts">StatusTupleResponse</a></code>

Methods:

- <code title="post /udl/status">client.status.<a href="./src/resources/status.ts">create</a>({ ...params }) -> void</code>
- <code title="put /udl/status/{id}">client.status.<a href="./src/resources/status.ts">update</a>(pathId, { ...params }) -> void</code>
- <code title="get /udl/status">client.status.<a href="./src/resources/status.ts">list</a>() -> StatusListResponse</code>
- <code title="delete /udl/status/{id}">client.status.<a href="./src/resources/status.ts">delete</a>(id) -> void</code>
- <code title="get /udl/status/count">client.status.<a href="./src/resources/status.ts">count</a>() -> string</code>
- <code title="get /udl/status/{id}">client.status.<a href="./src/resources/status.ts">get</a>(id) -> StatusGetResponse</code>
- <code title="get /udl/status/byIdEntity/{idEntity}">client.status.<a href="./src/resources/status.ts">getByEntityId</a>(idEntity) -> StatusGetByEntityIDResponse</code>
- <code title="get /udl/status/byEntityType/{entityType}">client.status.<a href="./src/resources/status.ts">getByEntityType</a>(entityType) -> StatusGetByEntityTypeResponse</code>
- <code title="get /udl/status/queryhelp">client.status.<a href="./src/resources/status.ts">queryhelp</a>() -> void</code>
- <code title="get /udl/status/tuple">client.status.<a href="./src/resources/status.ts">tuple</a>({ ...params }) -> StatusTupleResponse</code>

# Substatus

Types:

- <code><a href="./src/resources/substatus.ts">SubstatusListResponse</a></code>
- <code><a href="./src/resources/substatus.ts">SubstatusCountResponse</a></code>
- <code><a href="./src/resources/substatus.ts">SubstatusGetResponse</a></code>
- <code><a href="./src/resources/substatus.ts">SubstatusTupleResponse</a></code>

Methods:

- <code title="post /udl/substatus">client.substatus.<a href="./src/resources/substatus.ts">create</a>({ ...params }) -> void</code>
- <code title="put /udl/substatus/{id}">client.substatus.<a href="./src/resources/substatus.ts">update</a>(pathId, { ...params }) -> void</code>
- <code title="get /udl/substatus">client.substatus.<a href="./src/resources/substatus.ts">list</a>() -> SubstatusListResponse</code>
- <code title="delete /udl/substatus/{id}">client.substatus.<a href="./src/resources/substatus.ts">delete</a>(id) -> void</code>
- <code title="get /udl/substatus/count">client.substatus.<a href="./src/resources/substatus.ts">count</a>() -> string</code>
- <code title="get /udl/substatus/{id}">client.substatus.<a href="./src/resources/substatus.ts">get</a>(id) -> SubstatusGetResponse</code>
- <code title="get /udl/substatus/queryhelp">client.substatus.<a href="./src/resources/substatus.ts">queryhelp</a>() -> void</code>
- <code title="get /udl/substatus/tuple">client.substatus.<a href="./src/resources/substatus.ts">tuple</a>({ ...params }) -> SubstatusTupleResponse</code>

# SupportingData

## DataTypes

Types:

- <code><a href="./src/resources/supporting-data/data-types.ts">DataTypeListResponse</a></code>

Methods:

- <code title="get /udl/dataowner/getDataTypes">client.supportingData.dataTypes.<a href="./src/resources/supporting-data/data-types.ts">list</a>() -> DataTypeListResponse</code>

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

## ProviderMetadata

Types:

- <code><a href="./src/resources/supporting-data/provider-metadata.ts">ProviderMetadataRetrieveResponse</a></code>

Methods:

- <code title="get /udl/dataowner/providerMetadata">client.supportingData.providerMetadata.<a href="./src/resources/supporting-data/provider-metadata.ts">retrieve</a>() -> ProviderMetadataRetrieveResponse</code>

## QueryHelp

Methods:

- <code title="get /udl/dataowner/queryhelp">client.supportingData.queryHelp.<a href="./src/resources/supporting-data/query-help.ts">retrieve</a>() -> void</code>

# Surface

Types:

- <code><a href="./src/resources/surface.ts">SurfaceListResponse</a></code>
- <code><a href="./src/resources/surface.ts">SurfaceCountResponse</a></code>
- <code><a href="./src/resources/surface.ts">SurfaceGetResponse</a></code>
- <code><a href="./src/resources/surface.ts">SurfaceTupleResponse</a></code>

Methods:

- <code title="post /udl/surface">client.surface.<a href="./src/resources/surface.ts">create</a>({ ...params }) -> void</code>
- <code title="put /udl/surface/{id}">client.surface.<a href="./src/resources/surface.ts">update</a>(pathId, { ...params }) -> void</code>
- <code title="get /udl/surface">client.surface.<a href="./src/resources/surface.ts">list</a>() -> SurfaceListResponse</code>
- <code title="delete /udl/surface/{id}">client.surface.<a href="./src/resources/surface.ts">delete</a>(id) -> void</code>
- <code title="get /udl/surface/count">client.surface.<a href="./src/resources/surface.ts">count</a>() -> string</code>
- <code title="get /udl/surface/{id}">client.surface.<a href="./src/resources/surface.ts">get</a>(id) -> SurfaceGetResponse</code>
- <code title="get /udl/surface/queryhelp">client.surface.<a href="./src/resources/surface.ts">queryhelp</a>() -> void</code>
- <code title="get /udl/surface/tuple">client.surface.<a href="./src/resources/surface.ts">tuple</a>({ ...params }) -> SurfaceTupleResponse</code>

# Surfaceobstruction

Types:

- <code><a href="./src/resources/surfaceobstruction.ts">SurfaceobstructionListResponse</a></code>
- <code><a href="./src/resources/surfaceobstruction.ts">SurfaceobstructionCountResponse</a></code>
- <code><a href="./src/resources/surfaceobstruction.ts">SurfaceobstructionGetResponse</a></code>
- <code><a href="./src/resources/surfaceobstruction.ts">SurfaceobstructionTupleResponse</a></code>

Methods:

- <code title="post /udl/surfaceobstruction">client.surfaceobstruction.<a href="./src/resources/surfaceobstruction.ts">create</a>({ ...params }) -> void</code>
- <code title="put /udl/surfaceobstruction/{id}">client.surfaceobstruction.<a href="./src/resources/surfaceobstruction.ts">update</a>(pathId, { ...params }) -> void</code>
- <code title="get /udl/surfaceobstruction">client.surfaceobstruction.<a href="./src/resources/surfaceobstruction.ts">list</a>() -> SurfaceobstructionListResponse</code>
- <code title="delete /udl/surfaceobstruction/{id}">client.surfaceobstruction.<a href="./src/resources/surfaceobstruction.ts">delete</a>(id) -> void</code>
- <code title="get /udl/surfaceobstruction/count">client.surfaceobstruction.<a href="./src/resources/surfaceobstruction.ts">count</a>() -> string</code>
- <code title="post /filedrop/udl-surfaceobstruction">client.surfaceobstruction.<a href="./src/resources/surfaceobstruction.ts">createBulkV2</a>([ ...body ]) -> void</code>
- <code title="get /udl/surfaceobstruction/{id}">client.surfaceobstruction.<a href="./src/resources/surfaceobstruction.ts">get</a>(id) -> SurfaceobstructionGetResponse</code>
- <code title="get /udl/surfaceobstruction/queryhelp">client.surfaceobstruction.<a href="./src/resources/surfaceobstruction.ts">queryhelp</a>() -> void</code>
- <code title="get /udl/surfaceobstruction/tuple">client.surfaceobstruction.<a href="./src/resources/surfaceobstruction.ts">tuple</a>({ ...params }) -> SurfaceobstructionTupleResponse</code>

# Swir

Types:

- <code><a href="./src/resources/swir/swir.ts">SwirListResponse</a></code>
- <code><a href="./src/resources/swir/swir.ts">SwirCountResponse</a></code>
- <code><a href="./src/resources/swir/swir.ts">SwirTupleResponse</a></code>

Methods:

- <code title="post /udl/swir">client.swir.<a href="./src/resources/swir/swir.ts">create</a>({ ...params }) -> void</code>
- <code title="get /udl/swir">client.swir.<a href="./src/resources/swir/swir.ts">list</a>({ ...params }) -> SwirListResponse</code>
- <code title="get /udl/swir/count">client.swir.<a href="./src/resources/swir/swir.ts">count</a>({ ...params }) -> string</code>
- <code title="post /udl/swir/createBulk">client.swir.<a href="./src/resources/swir/swir.ts">createBulk</a>([ ...body ]) -> void</code>
- <code title="get /udl/swir/{id}">client.swir.<a href="./src/resources/swir/swir.ts">get</a>(id) -> SwirFull</code>
- <code title="get /udl/swir/queryhelp">client.swir.<a href="./src/resources/swir/swir.ts">queryhelp</a>() -> void</code>
- <code title="get /udl/swir/tuple">client.swir.<a href="./src/resources/swir/swir.ts">tuple</a>({ ...params }) -> SwirTupleResponse</code>

## History

Types:

- <code><a href="./src/resources/swir/history.ts">SwirFull</a></code>
- <code><a href="./src/resources/swir/history.ts">HistoryListResponse</a></code>
- <code><a href="./src/resources/swir/history.ts">HistoryCountResponse</a></code>

Methods:

- <code title="get /udl/swir/history">client.swir.history.<a href="./src/resources/swir/history.ts">list</a>({ ...params }) -> HistoryListResponse</code>
- <code title="get /udl/swir/history/aodr">client.swir.history.<a href="./src/resources/swir/history.ts">aodr</a>({ ...params }) -> void</code>
- <code title="get /udl/swir/history/count">client.swir.history.<a href="./src/resources/swir/history.ts">count</a>({ ...params }) -> string</code>

# Taiutc

Types:

- <code><a href="./src/resources/taiutc/taiutc.ts">TaiutcListResponse</a></code>
- <code><a href="./src/resources/taiutc/taiutc.ts">TaiutcCountResponse</a></code>
- <code><a href="./src/resources/taiutc/taiutc.ts">TaiutcTupleResponse</a></code>

Methods:

- <code title="post /udl/taiutc">client.taiutc.<a href="./src/resources/taiutc/taiutc.ts">create</a>({ ...params }) -> void</code>
- <code title="put /udl/taiutc/{id}">client.taiutc.<a href="./src/resources/taiutc/taiutc.ts">update</a>(pathId, { ...params }) -> void</code>
- <code title="get /udl/taiutc">client.taiutc.<a href="./src/resources/taiutc/taiutc.ts">list</a>({ ...params }) -> TaiutcListResponse</code>
- <code title="delete /udl/taiutc/{id}">client.taiutc.<a href="./src/resources/taiutc/taiutc.ts">delete</a>(id) -> void</code>
- <code title="get /udl/taiutc/count">client.taiutc.<a href="./src/resources/taiutc/taiutc.ts">count</a>({ ...params }) -> string</code>
- <code title="get /udl/taiutc/{id}">client.taiutc.<a href="./src/resources/taiutc/taiutc.ts">get</a>(id) -> TaiutcFull</code>
- <code title="get /udl/taiutc/queryhelp">client.taiutc.<a href="./src/resources/taiutc/taiutc.ts">queryhelp</a>() -> void</code>
- <code title="get /udl/taiutc/tuple">client.taiutc.<a href="./src/resources/taiutc/taiutc.ts">tuple</a>({ ...params }) -> TaiutcTupleResponse</code>

## History

Types:

- <code><a href="./src/resources/taiutc/history.ts">TaiutcFull</a></code>
- <code><a href="./src/resources/taiutc/history.ts">HistoryListResponse</a></code>
- <code><a href="./src/resources/taiutc/history.ts">HistoryCountResponse</a></code>

Methods:

- <code title="get /udl/taiutc/history">client.taiutc.history.<a href="./src/resources/taiutc/history.ts">list</a>({ ...params }) -> HistoryListResponse</code>
- <code title="get /udl/taiutc/history/aodr">client.taiutc.history.<a href="./src/resources/taiutc/history.ts">aodr</a>({ ...params }) -> void</code>
- <code title="get /udl/taiutc/history/count">client.taiutc.history.<a href="./src/resources/taiutc/history.ts">count</a>({ ...params }) -> string</code>

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

# Track

Types:

- <code><a href="./src/resources/track/track.ts">TrackListResponse</a></code>
- <code><a href="./src/resources/track/track.ts">TrackCountResponse</a></code>
- <code><a href="./src/resources/track/track.ts">TrackTupleResponse</a></code>

Methods:

- <code title="get /udl/track">client.track.<a href="./src/resources/track/track.ts">list</a>({ ...params }) -> TrackListResponse</code>
- <code title="get /udl/track/count">client.track.<a href="./src/resources/track/track.ts">count</a>({ ...params }) -> string</code>
- <code title="post /udl/track/createBulk">client.track.<a href="./src/resources/track/track.ts">createBulk</a>([ ...body ]) -> void</code>
- <code title="post /filedrop/udl-tracks">client.track.<a href="./src/resources/track/track.ts">createBulkV2</a>([ ...body ]) -> void</code>
- <code title="get /udl/track/queryhelp">client.track.<a href="./src/resources/track/track.ts">queryhelp</a>() -> void</code>
- <code title="get /udl/track/tuple">client.track.<a href="./src/resources/track/track.ts">tuple</a>({ ...params }) -> TrackTupleResponse</code>

## History

Types:

- <code><a href="./src/resources/track/history.ts">TrackFull</a></code>
- <code><a href="./src/resources/track/history.ts">HistoryListResponse</a></code>
- <code><a href="./src/resources/track/history.ts">HistoryCountResponse</a></code>

Methods:

- <code title="get /udl/track/history">client.track.history.<a href="./src/resources/track/history.ts">list</a>({ ...params }) -> HistoryListResponse</code>
- <code title="get /udl/track/history/aodr">client.track.history.<a href="./src/resources/track/history.ts">aodr</a>({ ...params }) -> void</code>
- <code title="get /udl/track/history/count">client.track.history.<a href="./src/resources/track/history.ts">count</a>({ ...params }) -> string</code>

# Trackdetails

Types:

- <code><a href="./src/resources/trackdetails/trackdetails.ts">TrackdetailListResponse</a></code>
- <code><a href="./src/resources/trackdetails/trackdetails.ts">TrackdetailCountResponse</a></code>
- <code><a href="./src/resources/trackdetails/trackdetails.ts">TrackdetailTupleResponse</a></code>

Methods:

- <code title="get /udl/trackdetails">client.trackdetails.<a href="./src/resources/trackdetails/trackdetails.ts">list</a>({ ...params }) -> TrackdetailListResponse</code>
- <code title="get /udl/trackdetails/count">client.trackdetails.<a href="./src/resources/trackdetails/trackdetails.ts">count</a>({ ...params }) -> string</code>
- <code title="post /udl/trackdetails/createBulk">client.trackdetails.<a href="./src/resources/trackdetails/trackdetails.ts">createBulk</a>([ ...body ]) -> void</code>
- <code title="get /udl/trackdetails/queryhelp">client.trackdetails.<a href="./src/resources/trackdetails/trackdetails.ts">queryhelp</a>() -> void</code>
- <code title="get /udl/trackdetails/tuple">client.trackdetails.<a href="./src/resources/trackdetails/trackdetails.ts">tuple</a>({ ...params }) -> TrackdetailTupleResponse</code>

## History

Types:

- <code><a href="./src/resources/trackdetails/history.ts">TrackDetailsFull</a></code>
- <code><a href="./src/resources/trackdetails/history.ts">HistoryListResponse</a></code>
- <code><a href="./src/resources/trackdetails/history.ts">HistoryCountResponse</a></code>

Methods:

- <code title="get /udl/trackdetails/history">client.trackdetails.history.<a href="./src/resources/trackdetails/history.ts">list</a>({ ...params }) -> HistoryListResponse</code>
- <code title="get /udl/trackdetails/history/aodr">client.trackdetails.history.<a href="./src/resources/trackdetails/history.ts">aodr</a>({ ...params }) -> void</code>
- <code title="get /udl/trackdetails/history/count">client.trackdetails.history.<a href="./src/resources/trackdetails/history.ts">count</a>({ ...params }) -> string</code>

# Trackroute

Types:

- <code><a href="./src/resources/trackroute/trackroute.ts">TrackrouteListResponse</a></code>
- <code><a href="./src/resources/trackroute/trackroute.ts">TrackrouteCountResponse</a></code>
- <code><a href="./src/resources/trackroute/trackroute.ts">TrackrouteTupleResponse</a></code>

Methods:

- <code title="post /udl/trackroute">client.trackroute.<a href="./src/resources/trackroute/trackroute.ts">create</a>({ ...params }) -> void</code>
- <code title="put /udl/trackroute/{id}">client.trackroute.<a href="./src/resources/trackroute/trackroute.ts">update</a>(pathId, { ...params }) -> void</code>
- <code title="get /udl/trackroute">client.trackroute.<a href="./src/resources/trackroute/trackroute.ts">list</a>({ ...params }) -> TrackrouteListResponse</code>
- <code title="delete /udl/trackroute/{id}">client.trackroute.<a href="./src/resources/trackroute/trackroute.ts">delete</a>(id) -> void</code>
- <code title="get /udl/trackroute/count">client.trackroute.<a href="./src/resources/trackroute/trackroute.ts">count</a>({ ...params }) -> string</code>
- <code title="post /udl/trackroute/createBulk">client.trackroute.<a href="./src/resources/trackroute/trackroute.ts">createBulk</a>([ ...body ]) -> void</code>
- <code title="post /filedrop/udl-trackroute">client.trackroute.<a href="./src/resources/trackroute/trackroute.ts">createBulkV2</a>({ ...params }) -> void</code>
- <code title="get /udl/trackroute/{id}">client.trackroute.<a href="./src/resources/trackroute/trackroute.ts">get</a>(id) -> TrackRouteFull</code>
- <code title="get /udl/trackroute/queryhelp">client.trackroute.<a href="./src/resources/trackroute/trackroute.ts">queryhelp</a>() -> void</code>
- <code title="get /udl/trackroute/tuple">client.trackroute.<a href="./src/resources/trackroute/trackroute.ts">tuple</a>({ ...params }) -> TrackrouteTupleResponse</code>

## History

Types:

- <code><a href="./src/resources/trackroute/history.ts">TrackRouteFull</a></code>
- <code><a href="./src/resources/trackroute/history.ts">HistoryListResponse</a></code>
- <code><a href="./src/resources/trackroute/history.ts">HistoryCountResponse</a></code>

Methods:

- <code title="get /udl/trackroute/history">client.trackroute.history.<a href="./src/resources/trackroute/history.ts">list</a>({ ...params }) -> HistoryListResponse</code>
- <code title="get /udl/trackroute/history/aodr">client.trackroute.history.<a href="./src/resources/trackroute/history.ts">aodr</a>({ ...params }) -> void</code>
- <code title="get /udl/trackroute/history/count">client.trackroute.history.<a href="./src/resources/trackroute/history.ts">count</a>({ ...params }) -> string</code>

# Transponder

Types:

- <code><a href="./src/resources/transponder.ts">TransponderListResponse</a></code>
- <code><a href="./src/resources/transponder.ts">TransponderCountResponse</a></code>
- <code><a href="./src/resources/transponder.ts">TransponderGetResponse</a></code>
- <code><a href="./src/resources/transponder.ts">TransponderTupleResponse</a></code>

Methods:

- <code title="post /udl/transponder">client.transponder.<a href="./src/resources/transponder.ts">create</a>({ ...params }) -> void</code>
- <code title="put /udl/transponder/{id}">client.transponder.<a href="./src/resources/transponder.ts">update</a>(pathId, { ...params }) -> void</code>
- <code title="get /udl/transponder">client.transponder.<a href="./src/resources/transponder.ts">list</a>() -> TransponderListResponse</code>
- <code title="delete /udl/transponder/{id}">client.transponder.<a href="./src/resources/transponder.ts">delete</a>(id) -> void</code>
- <code title="get /udl/transponder/count">client.transponder.<a href="./src/resources/transponder.ts">count</a>() -> string</code>
- <code title="get /udl/transponder/{id}">client.transponder.<a href="./src/resources/transponder.ts">get</a>(id) -> TransponderGetResponse</code>
- <code title="get /udl/transponder/queryhelp">client.transponder.<a href="./src/resources/transponder.ts">queryhelp</a>() -> void</code>
- <code title="get /udl/transponder/tuple">client.transponder.<a href="./src/resources/transponder.ts">tuple</a>({ ...params }) -> TransponderTupleResponse</code>

# Vessel

Types:

- <code><a href="./src/resources/vessel.ts">VesselListResponse</a></code>
- <code><a href="./src/resources/vessel.ts">VesselCountResponse</a></code>
- <code><a href="./src/resources/vessel.ts">VesselGetResponse</a></code>
- <code><a href="./src/resources/vessel.ts">VesselTupleResponse</a></code>

Methods:

- <code title="post /udl/vessel">client.vessel.<a href="./src/resources/vessel.ts">create</a>({ ...params }) -> void</code>
- <code title="put /udl/vessel/{id}">client.vessel.<a href="./src/resources/vessel.ts">update</a>(pathId, { ...params }) -> void</code>
- <code title="get /udl/vessel">client.vessel.<a href="./src/resources/vessel.ts">list</a>() -> VesselListResponse</code>
- <code title="get /udl/vessel/count">client.vessel.<a href="./src/resources/vessel.ts">count</a>() -> string</code>
- <code title="post /udl/vessel/createBulk">client.vessel.<a href="./src/resources/vessel.ts">createBulk</a>([ ...body ]) -> void</code>
- <code title="get /udl/vessel/{id}">client.vessel.<a href="./src/resources/vessel.ts">get</a>(id) -> VesselGetResponse</code>
- <code title="get /udl/vessel/queryhelp">client.vessel.<a href="./src/resources/vessel.ts">queryhelp</a>() -> void</code>
- <code title="get /udl/vessel/tuple">client.vessel.<a href="./src/resources/vessel.ts">tuple</a>({ ...params }) -> VesselTupleResponse</code>

# Video

Types:

- <code><a href="./src/resources/video/video.ts">VideoListResponse</a></code>
- <code><a href="./src/resources/video/video.ts">VideoCountResponse</a></code>
- <code><a href="./src/resources/video/video.ts">VideoGetPlayerStreamingInfoResponse</a></code>
- <code><a href="./src/resources/video/video.ts">VideoGetPublisherStreamingInfoResponse</a></code>
- <code><a href="./src/resources/video/video.ts">VideoGetStreamFileResponse</a></code>
- <code><a href="./src/resources/video/video.ts">VideoTupleResponse</a></code>

Methods:

- <code title="post /udl/video">client.video.<a href="./src/resources/video/video.ts">create</a>({ ...params }) -> void</code>
- <code title="get /udl/video">client.video.<a href="./src/resources/video/video.ts">list</a>() -> VideoListResponse</code>
- <code title="get /udl/video/count">client.video.<a href="./src/resources/video/video.ts">count</a>() -> string</code>
- <code title="get /udl/video/{id}">client.video.<a href="./src/resources/video/video.ts">get</a>(id) -> VideoStreamsFull</code>
- <code title="get /udl/video/getPlayerStreamingInfo">client.video.<a href="./src/resources/video/video.ts">getPlayerStreamingInfo</a>({ ...params }) -> VideoGetPlayerStreamingInfoResponse</code>
- <code title="get /udl/video/getPublisherStreamingInfo">client.video.<a href="./src/resources/video/video.ts">getPublisherStreamingInfo</a>({ ...params }) -> VideoGetPublisherStreamingInfoResponse</code>
- <code title="get /udl/video/getStreamFile">client.video.<a href="./src/resources/video/video.ts">getStreamFile</a>({ ...params }) -> VideoGetStreamFileResponse</code>
- <code title="get /udl/video/queryhelp">client.video.<a href="./src/resources/video/video.ts">queryhelp</a>() -> void</code>
- <code title="get /udl/video/tuple">client.video.<a href="./src/resources/video/video.ts">tuple</a>({ ...params }) -> VideoTupleResponse</code>

## History

Types:

- <code><a href="./src/resources/video/history.ts">VideoStreamsFull</a></code>
- <code><a href="./src/resources/video/history.ts">HistoryListResponse</a></code>
- <code><a href="./src/resources/video/history.ts">HistoryCountResponse</a></code>

Methods:

- <code title="get /udl/video/history">client.video.history.<a href="./src/resources/video/history.ts">list</a>({ ...params }) -> HistoryListResponse</code>
- <code title="get /udl/video/history/count">client.video.history.<a href="./src/resources/video/history.ts">count</a>() -> string</code>

# Weatherdata

Types:

- <code><a href="./src/resources/weatherdata/weatherdata.ts">WeatherdataListResponse</a></code>
- <code><a href="./src/resources/weatherdata/weatherdata.ts">WeatherdataCountResponse</a></code>
- <code><a href="./src/resources/weatherdata/weatherdata.ts">WeatherdataTupleResponse</a></code>

Methods:

- <code title="post /udl/weatherdata">client.weatherdata.<a href="./src/resources/weatherdata/weatherdata.ts">create</a>({ ...params }) -> void</code>
- <code title="get /udl/weatherdata">client.weatherdata.<a href="./src/resources/weatherdata/weatherdata.ts">list</a>({ ...params }) -> WeatherdataListResponse</code>
- <code title="get /udl/weatherdata/count">client.weatherdata.<a href="./src/resources/weatherdata/weatherdata.ts">count</a>({ ...params }) -> string</code>
- <code title="post /udl/weatherdata/createBulk">client.weatherdata.<a href="./src/resources/weatherdata/weatherdata.ts">createBulk</a>([ ...body ]) -> void</code>
- <code title="post /filedrop/udl-weatherdata">client.weatherdata.<a href="./src/resources/weatherdata/weatherdata.ts">createBulkV2</a>([ ...body ]) -> void</code>
- <code title="get /udl/weatherdata/{id}">client.weatherdata.<a href="./src/resources/weatherdata/weatherdata.ts">get</a>(id) -> WeatherDataFull</code>
- <code title="get /udl/weatherdata/queryhelp">client.weatherdata.<a href="./src/resources/weatherdata/weatherdata.ts">queryhelp</a>() -> void</code>
- <code title="get /udl/weatherdata/tuple">client.weatherdata.<a href="./src/resources/weatherdata/weatherdata.ts">tuple</a>({ ...params }) -> WeatherdataTupleResponse</code>

## History

Types:

- <code><a href="./src/resources/weatherdata/history.ts">WeatherDataFull</a></code>
- <code><a href="./src/resources/weatherdata/history.ts">HistoryListResponse</a></code>
- <code><a href="./src/resources/weatherdata/history.ts">HistoryCountResponse</a></code>

Methods:

- <code title="get /udl/weatherdata/history">client.weatherdata.history.<a href="./src/resources/weatherdata/history.ts">list</a>({ ...params }) -> HistoryListResponse</code>
- <code title="get /udl/weatherdata/history/aodr">client.weatherdata.history.<a href="./src/resources/weatherdata/history.ts">aodr</a>({ ...params }) -> void</code>
- <code title="get /udl/weatherdata/history/count">client.weatherdata.history.<a href="./src/resources/weatherdata/history.ts">count</a>({ ...params }) -> string</code>

# Weatherreport

Types:

- <code><a href="./src/resources/weatherreport/weatherreport.ts">WeatherreportListResponse</a></code>
- <code><a href="./src/resources/weatherreport/weatherreport.ts">WeatherreportCountResponse</a></code>
- <code><a href="./src/resources/weatherreport/weatherreport.ts">WeatherreportTupleResponse</a></code>

Methods:

- <code title="post /udl/weatherreport">client.weatherreport.<a href="./src/resources/weatherreport/weatherreport.ts">create</a>({ ...params }) -> void</code>
- <code title="get /udl/weatherreport">client.weatherreport.<a href="./src/resources/weatherreport/weatherreport.ts">list</a>({ ...params }) -> WeatherreportListResponse</code>
- <code title="get /udl/weatherreport/count">client.weatherreport.<a href="./src/resources/weatherreport/weatherreport.ts">count</a>({ ...params }) -> string</code>
- <code title="post /filedrop/udl-weatherreport">client.weatherreport.<a href="./src/resources/weatherreport/weatherreport.ts">createBulkV2</a>([ ...body ]) -> void</code>
- <code title="get /udl/weatherreport/{id}">client.weatherreport.<a href="./src/resources/weatherreport/weatherreport.ts">get</a>(id) -> WeatherReportFull</code>
- <code title="get /udl/weatherreport/queryhelp">client.weatherreport.<a href="./src/resources/weatherreport/weatherreport.ts">queryhelp</a>() -> void</code>
- <code title="get /udl/weatherreport/tuple">client.weatherreport.<a href="./src/resources/weatherreport/weatherreport.ts">tuple</a>({ ...params }) -> WeatherreportTupleResponse</code>

## History

Types:

- <code><a href="./src/resources/weatherreport/history.ts">WeatherReportFull</a></code>
- <code><a href="./src/resources/weatherreport/history.ts">HistoryListResponse</a></code>
- <code><a href="./src/resources/weatherreport/history.ts">HistoryCountResponse</a></code>

Methods:

- <code title="get /udl/weatherreport/history">client.weatherreport.history.<a href="./src/resources/weatherreport/history.ts">list</a>({ ...params }) -> HistoryListResponse</code>
- <code title="get /udl/weatherreport/history/aodr">client.weatherreport.history.<a href="./src/resources/weatherreport/history.ts">aodr</a>({ ...params }) -> void</code>
- <code title="get /udl/weatherreport/history/count">client.weatherreport.history.<a href="./src/resources/weatherreport/history.ts">count</a>({ ...params }) -> string</code>

# Udl

## Geostatus

### History

Types:

- <code><a href="./src/resources/udl/geostatus/history.ts">GeoStatusFull</a></code>
- <code><a href="./src/resources/udl/geostatus/history.ts">HistoryListResponse</a></code>
- <code><a href="./src/resources/udl/geostatus/history.ts">HistoryCountResponse</a></code>

Methods:

- <code title="get /udl/geostatus/history">client.udl.geostatus.history.<a href="./src/resources/udl/geostatus/history.ts">list</a>({ ...params }) -> HistoryListResponse</code>
- <code title="get /udl/geostatus/history/aodr">client.udl.geostatus.history.<a href="./src/resources/udl/geostatus/history.ts">aodr</a>({ ...params }) -> void</code>
- <code title="get /udl/geostatus/history/count">client.udl.geostatus.history.<a href="./src/resources/udl/geostatus/history.ts">count</a>({ ...params }) -> string</code>

## Gnssobservationset

### History

Types:

- <code><a href="./src/resources/udl/gnssobservationset/history.ts">GnssObservationSetFull</a></code>
- <code><a href="./src/resources/udl/gnssobservationset/history.ts">HistoryListResponse</a></code>

Methods:

- <code title="get /udl/gnssobservationset/history">client.udl.gnssobservationset.history.<a href="./src/resources/udl/gnssobservationset/history.ts">list</a>({ ...params }) -> HistoryListResponse</code>
- <code title="get /udl/gnssobservationset/history/aodr">client.udl.gnssobservationset.history.<a href="./src/resources/udl/gnssobservationset/history.ts">aodr</a>({ ...params }) -> void</code>

## Mti

### History

Types:

- <code><a href="./src/resources/udl/mti/history.ts">MtiFull</a></code>
- <code><a href="./src/resources/udl/mti/history.ts">HistoryListResponse</a></code>
- <code><a href="./src/resources/udl/mti/history.ts">HistoryCountResponse</a></code>

Methods:

- <code title="get /udl/mti/history">client.udl.mti.history.<a href="./src/resources/udl/mti/history.ts">list</a>({ ...params }) -> HistoryListResponse</code>
- <code title="get /udl/mti/history/aodr">client.udl.mti.history.<a href="./src/resources/udl/mti/history.ts">aodr</a>({ ...params }) -> void</code>
- <code title="get /udl/mti/history/count">client.udl.mti.history.<a href="./src/resources/udl/mti/history.ts">count</a>({ ...params }) -> string</code>

## Notification

### History

Types:

- <code><a href="./src/resources/udl/notification/history.ts">NotificationFull</a></code>
- <code><a href="./src/resources/udl/notification/history.ts">HistoryListResponse</a></code>
- <code><a href="./src/resources/udl/notification/history.ts">HistoryCountResponse</a></code>

Methods:

- <code title="get /udl/notification/history">client.udl.notification.history.<a href="./src/resources/udl/notification/history.ts">list</a>({ ...params }) -> HistoryListResponse</code>
- <code title="get /udl/notification/history/aodr">client.udl.notification.history.<a href="./src/resources/udl/notification/history.ts">aodr</a>({ ...params }) -> void</code>
- <code title="get /udl/notification/history/count">client.udl.notification.history.<a href="./src/resources/udl/notification/history.ts">count</a>({ ...params }) -> string</code>

## Onboardnavigation

### History

Types:

- <code><a href="./src/resources/udl/onboardnavigation/history.ts">OnboardnavigationFull</a></code>
- <code><a href="./src/resources/udl/onboardnavigation/history.ts">HistoryListResponse</a></code>
- <code><a href="./src/resources/udl/onboardnavigation/history.ts">HistoryCountResponse</a></code>

Methods:

- <code title="get /udl/onboardnavigation/history">client.udl.onboardnavigation.history.<a href="./src/resources/udl/onboardnavigation/history.ts">list</a>({ ...params }) -> HistoryListResponse</code>
- <code title="get /udl/onboardnavigation/history/aodr">client.udl.onboardnavigation.history.<a href="./src/resources/udl/onboardnavigation/history.ts">aodr</a>({ ...params }) -> void</code>
- <code title="get /udl/onboardnavigation/history/count">client.udl.onboardnavigation.history.<a href="./src/resources/udl/onboardnavigation/history.ts">count</a>({ ...params }) -> string</code>

## Onorbitthrusterstatus

### History

Types:

- <code><a href="./src/resources/udl/onorbitthrusterstatus/history.ts">OnorbitthrusterstatusFull</a></code>
- <code><a href="./src/resources/udl/onorbitthrusterstatus/history.ts">HistoryListResponse</a></code>

Methods:

- <code title="get /udl/onorbitthrusterstatus/history">client.udl.onorbitthrusterstatus.history.<a href="./src/resources/udl/onorbitthrusterstatus/history.ts">list</a>({ ...params }) -> HistoryListResponse</code>

## Gnssrawif

### History

Types:

- <code><a href="./src/resources/udl/gnssrawif/history.ts">GnssRawIfFull</a></code>

## Groundimagery

### History

Types:

- <code><a href="./src/resources/udl/groundimagery/history.ts">GroundImageryFull</a></code>

## Hazard

### History

Types:

- <code><a href="./src/resources/udl/hazard/history.ts">HazardFull</a></code>

## Ionoobservation

### History

Types:

- <code><a href="./src/resources/udl/ionoobservation/history.ts">IonoObservationFull</a></code>

## Isrcollection

### History

Types:

- <code><a href="./src/resources/udl/isrcollection/history.ts">IsrCollectionFull</a></code>

## Itemtracking

### History

Types:

- <code><a href="./src/resources/udl/itemtracking/history.ts">ItemTrackingFull</a></code>

## Linkstatus

### History

Types:

- <code><a href="./src/resources/udl/linkstatus/history.ts">LinkStatusFull</a></code>

## Maneuver

### History

Types:

- <code><a href="./src/resources/udl/maneuver/history.ts">ManeuverFull</a></code>

## Missiletrack

### History

Types:

- <code><a href="./src/resources/udl/missiletrack/history.ts">MissileTrackFull</a></code>

## Missionassignment

### History

Types:

- <code><a href="./src/resources/udl/missionassignment/history.ts">MissionAssignmentFull</a></code>

## Monoradar

### History

Types:

- <code><a href="./src/resources/udl/monoradar/history.ts">MonoRadarFull</a></code>

## Orbitdetermination

### History

Types:

- <code><a href="./src/resources/udl/orbitdetermination/history.ts">OrbitdeterminationFull</a></code>

## Orbittrack

### History

Types:

- <code><a href="./src/resources/udl/orbittrack/history.ts">OrbittrackFull</a></code>

## Passiveradarobservation

### History

Types:

- <code><a href="./src/resources/udl/passiveradarobservation/history.ts">PassiveradarobservationFull</a></code>

## Poi

### History

Types:

- <code><a href="./src/resources/udl/poi/history.ts">PoiFull</a></code>

## Radarobservation

### History

Types:

- <code><a href="./src/resources/udl/radarobservation/history.ts">RadarobservationFull</a></code>

## Rfobservation

### History

Types:

- <code><a href="./src/resources/udl/rfobservation/history.ts">RfobservationdetailsFull</a></code>

## Sarobservation

### History

Types:

- <code><a href="./src/resources/udl/sarobservation/history.ts">SarobservationFull</a></code>

## Sensormaintenance

### History

Types:

- <code><a href="./src/resources/udl/sensormaintenance/history.ts">SensormaintenanceFull</a></code>

## Sensorplan

### History

Types:

- <code><a href="./src/resources/udl/sensorplan/history.ts">SensorplanFull</a></code>

## Sgi

### History

Types:

- <code><a href="./src/resources/udl/sgi/history.ts">SgiFull</a></code>

## Sigact

### History

Types:

- <code><a href="./src/resources/udl/sigact/history.ts">SigactFull</a></code>

## Sitestatus

### History

Types:

- <code><a href="./src/resources/udl/sitestatus/history.ts">SitestatusFull</a></code>

## Skyimagery

### History

Types:

- <code><a href="./src/resources/udl/skyimagery/history.ts">SkyimageryFull</a></code>

# GnssObservations

## History

Types:

- <code><a href="./src/resources/gnss-observations/history.ts">HistoryCountResponse</a></code>

Methods:

- <code title="get /udl/gnssobservationset/history/count">client.gnssObservations.history.<a href="./src/resources/gnss-observations/history.ts">count</a>({ ...params }) -> string</code>

# GnssRawIf

## History

Types:

- <code><a href="./src/resources/gnss-raw-if/history.ts">HistoryCountResponse</a></code>
- <code><a href="./src/resources/gnss-raw-if/history.ts">HistoryQueryResponse</a></code>

Methods:

- <code title="get /udl/gnssrawif/history/aodr">client.gnssRawIf.history.<a href="./src/resources/gnss-raw-if/history.ts">aodr</a>({ ...params }) -> void</code>
- <code title="get /udl/gnssrawif/history/count">client.gnssRawIf.history.<a href="./src/resources/gnss-raw-if/history.ts">count</a>({ ...params }) -> string</code>
- <code title="get /udl/gnssrawif/history">client.gnssRawIf.history.<a href="./src/resources/gnss-raw-if/history.ts">query</a>({ ...params }) -> HistoryQueryResponse</code>

# IonoObservation

## History

Types:

- <code><a href="./src/resources/iono-observation/history.ts">HistoryListResponse</a></code>
- <code><a href="./src/resources/iono-observation/history.ts">HistoryCountResponse</a></code>

Methods:

- <code title="get /udl/ionoobservation/history">client.ionoObservation.history.<a href="./src/resources/iono-observation/history.ts">list</a>({ ...params }) -> HistoryListResponse</code>
- <code title="get /udl/ionoobservation/history/aodr">client.ionoObservation.history.<a href="./src/resources/iono-observation/history.ts">aodr</a>({ ...params }) -> void</code>
- <code title="get /udl/ionoobservation/history/count">client.ionoObservation.history.<a href="./src/resources/iono-observation/history.ts">count</a>({ ...params }) -> string</code>

# LaunchEvent

Methods:

- <code title="post /filedrop/udl-launchevent">client.launchEvent.<a href="./src/resources/launch-event/launch-event.ts">createBulkV2</a>([ ...body ]) -> void</code>

## History

Types:

- <code><a href="./src/resources/launch-event/history.ts">HistoryListResponse</a></code>
- <code><a href="./src/resources/launch-event/history.ts">HistoryCountResponse</a></code>

Methods:

- <code title="get /udl/launchevent/history">client.launchEvent.history.<a href="./src/resources/launch-event/history.ts">list</a>({ ...params }) -> HistoryListResponse</code>
- <code title="get /udl/launchevent/history/aodr">client.launchEvent.history.<a href="./src/resources/launch-event/history.ts">aodr</a>({ ...params }) -> void</code>
- <code title="get /udl/launchevent/history/count">client.launchEvent.history.<a href="./src/resources/launch-event/history.ts">count</a>({ ...params }) -> string</code>

# ReportAndActivity

## Poi

### History

Types:

- <code><a href="./src/resources/report-and-activity/poi/history.ts">HistoryListResponse</a></code>
- <code><a href="./src/resources/report-and-activity/poi/history.ts">HistoryCountResponse</a></code>

Methods:

- <code title="get /udl/poi/history">client.reportAndActivity.poi.history.<a href="./src/resources/report-and-activity/poi/history.ts">list</a>({ ...params }) -> HistoryListResponse</code>
- <code title="get /udl/poi/history/aodr">client.reportAndActivity.poi.history.<a href="./src/resources/report-and-activity/poi/history.ts">aodr</a>({ ...params }) -> void</code>
- <code title="get /udl/poi/history/count">client.reportAndActivity.poi.history.<a href="./src/resources/report-and-activity/poi/history.ts">count</a>({ ...params }) -> string</code>

## UdlH3geo

Methods:

- <code title="post /filedrop/udl-h3geo">client.reportAndActivity.udlH3geo.<a href="./src/resources/report-and-activity/udl-h3geo.ts">createBulkV2</a>({ ...params }) -> void</code>

## UdlSigact

Methods:

- <code title="post /filedrop/udl-sigact">client.reportAndActivity.udlSigact.<a href="./src/resources/report-and-activity/udl-sigact.ts">createBulkV2</a>([ ...body ]) -> void</code>
- <code title="get /udl/sigact/getFile/{id}">client.reportAndActivity.udlSigact.<a href="./src/resources/report-and-activity/udl-sigact.ts">fileGet</a>(id) -> Response</code>

# SecureMessaging

Types:

- <code><a href="./src/resources/secure-messaging.ts">TopicDetails</a></code>
- <code><a href="./src/resources/secure-messaging.ts">SecureMessagingListTopicsResponse</a></code>

Methods:

- <code title="get /sm/describeTopic/{topic}">client.secureMessaging.<a href="./src/resources/secure-messaging.ts">describeTopic</a>(topic) -> TopicDetails</code>
- <code title="get /sm/getLatestOffset/{topic}">client.secureMessaging.<a href="./src/resources/secure-messaging.ts">getLatestOffset</a>(topic) -> void</code>
- <code title="get /sm/getMessages/{topic}/{offset}">client.secureMessaging.<a href="./src/resources/secure-messaging.ts">getMessages</a>(topic, offset) -> void</code>
- <code title="get /sm/listTopics">client.secureMessaging.<a href="./src/resources/secure-messaging.ts">listTopics</a>() -> SecureMessagingListTopicsResponse</code>

# Scs

Types:

- <code><a href="./src/resources/scs/scs.ts">ScAggregateDocTypeResponse</a></code>
- <code><a href="./src/resources/scs/scs.ts">ScAllowableFileExtensionsResponse</a></code>
- <code><a href="./src/resources/scs/scs.ts">ScAllowableFileMimesResponse</a></code>
- <code><a href="./src/resources/scs/scs.ts">ScCopyResponse</a></code>
- <code><a href="./src/resources/scs/scs.ts">ScFileUploadResponse</a></code>
- <code><a href="./src/resources/scs/scs.ts">ScMoveResponse</a></code>
- <code><a href="./src/resources/scs/scs.ts">ScSearchResponse</a></code>

Methods:

- <code title="delete /scs/delete">client.scs.<a href="./src/resources/scs/scs.ts">delete</a>({ ...params }) -> void</code>
- <code title="get /scs/aggregateDocType">client.scs.<a href="./src/resources/scs/scs.ts">aggregateDocType</a>() -> ScAggregateDocTypeResponse</code>
- <code title="get /scs/allowableFileExtensions">client.scs.<a href="./src/resources/scs/scs.ts">allowableFileExtensions</a>() -> ScAllowableFileExtensionsResponse</code>
- <code title="get /scs/allowableFileMimes">client.scs.<a href="./src/resources/scs/scs.ts">allowableFileMimes</a>() -> ScAllowableFileMimesResponse</code>
- <code title="post /scs/copy">client.scs.<a href="./src/resources/scs/scs.ts">copy</a>({ ...params }) -> string</code>
- <code title="post /scs/download">client.scs.<a href="./src/resources/scs/scs.ts">download</a>([ ...body ]) -> Response</code>
- <code title="get /scs/download">client.scs.<a href="./src/resources/scs/scs.ts">fileDownload</a>({ ...params }) -> Response</code>
- <code title="post /scs/file">client.scs.<a href="./src/resources/scs/scs.ts">fileUpload</a>({ ...params }) -> string</code>
- <code title="put /scs/move">client.scs.<a href="./src/resources/scs/scs.ts">move</a>({ ...params }) -> string</code>
- <code title="put /scs/rename">client.scs.<a href="./src/resources/scs/scs.ts">rename</a>({ ...params }) -> void</code>
- <code title="post /scs/search">client.scs.<a href="./src/resources/scs/scs.ts">search</a>({ ...params }) -> ScSearchResponse</code>
- <code title="put /scs/updateTagsForFilesInFolder">client.scs.<a href="./src/resources/scs/scs.ts">updateTags</a>({ ...params }) -> void</code>

## Folders

Types:

- <code><a href="./src/resources/scs/folders.ts">FolderCreateResponse</a></code>

Methods:

- <code title="post /scs/folder">client.scs.folders.<a href="./src/resources/scs/folders.ts">create</a>({ ...params }) -> string</code>
- <code title="get /scs/folder">client.scs.folders.<a href="./src/resources/scs/folders.ts">retrieve</a>({ ...params }) -> FileData</code>
- <code title="patch /scs/folder">client.scs.folders.<a href="./src/resources/scs/folders.ts">update</a>({ ...params }) -> void</code>

## ClassificationMarkings

Types:

- <code><a href="./src/resources/scs/classification-markings.ts">ClassificationMarkingListResponse</a></code>

Methods:

- <code title="get /scs/getClassificationMarkings">client.scs.classificationMarkings.<a href="./src/resources/scs/classification-markings.ts">list</a>() -> ClassificationMarkingListResponse</code>

## Groups

Types:

- <code><a href="./src/resources/scs/groups.ts">GroupListResponse</a></code>

Methods:

- <code title="get /scs/groups">client.scs.groups.<a href="./src/resources/scs/groups.ts">list</a>() -> GroupListResponse</code>

## FileMetadata

Types:

- <code><a href="./src/resources/scs/file-metadata.ts">FileMetadataListResponse</a></code>

Methods:

- <code title="get /scs/listFileMetadata">client.scs.fileMetadata.<a href="./src/resources/scs/file-metadata.ts">list</a>() -> FileMetadataListResponse</code>

## RangeParameters

Types:

- <code><a href="./src/resources/scs/range-parameters.ts">RangeParameterListResponse</a></code>

Methods:

- <code title="get /scs/listRangeParameters">client.scs.rangeParameters.<a href="./src/resources/scs/range-parameters.ts">list</a>() -> RangeParameterListResponse</code>

## Paths

Types:

- <code><a href="./src/resources/scs/paths.ts">PathCreateResponse</a></code>

Methods:

- <code title="post /scs/path">client.scs.paths.<a href="./src/resources/scs/paths.ts">create</a>({ ...params }) -> string</code>

## V2

Types:

- <code><a href="./src/resources/scs/v2.ts">Attachment</a></code>
- <code><a href="./src/resources/scs/v2.ts">ScsEntity</a></code>
- <code><a href="./src/resources/scs/v2.ts">V2ListResponse</a></code>

Methods:

- <code title="patch /scs/v2/update">client.scs.v2.<a href="./src/resources/scs/v2.ts">update</a>({ ...params }) -> void</code>
- <code title="get /scs/v2/list">client.scs.v2.<a href="./src/resources/scs/v2.ts">list</a>({ ...params }) -> V2ListResponse</code>
- <code title="delete /scs/v2/delete">client.scs.v2.<a href="./src/resources/scs/v2.ts">delete</a>({ ...params }) -> void</code>
- <code title="post /scs/v2/copy">client.scs.v2.<a href="./src/resources/scs/v2.ts">copy</a>({ ...params }) -> void</code>
- <code title="post /scs/v2/file">client.scs.v2.<a href="./src/resources/scs/v2.ts">fileUpload</a>({ ...params }) -> void</code>
- <code title="post /scs/v2/folder">client.scs.v2.<a href="./src/resources/scs/v2.ts">folderCreate</a>({ ...params }) -> void</code>
- <code title="put /scs/v2/move">client.scs.v2.<a href="./src/resources/scs/v2.ts">move</a>({ ...params }) -> void</code>

## File

Methods:

- <code title="get /scs/file">client.scs.file.<a href="./src/resources/scs/file.ts">retrieve</a>({ ...params }) -> FileData</code>
- <code title="patch /scs/file">client.scs.file.<a href="./src/resources/scs/file.ts">update</a>({ ...params }) -> void</code>
- <code title="get /scs/list">client.scs.file.<a href="./src/resources/scs/file.ts">list</a>({ ...params }) -> FileDataOffsetPage</code>

# ScsViews

Methods:

- <code title="get /scs/view/{id}">client.scsViews.<a href="./src/resources/scs-views.ts">retrieve</a>(id) -> Response</code>
