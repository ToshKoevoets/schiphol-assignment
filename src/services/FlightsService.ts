/**
 * Service for interacting with the flights API
 */
import { Flight } from "../types/Flight";

import { SortTypes } from "../types/Sort";

const apiBase = '/api';

/**
 * Get all flights
 * @returns array of flights
 */
const getFlights = (): Promise<Flight[]> => {
  return fetch(`${apiBase}/flights`)
    .then(data => data.json())
}

/**
 * Search flights by airport name
 * 
 * @param flights 
 * @param searchTerm 
 * @returns array of flights
 */
const searchFlights = (flights: Flight[], searchTerm: string): Flight[] => {
  return flights.filter((flight: Flight) => {
    return flight.airport.toLowerCase().includes(searchTerm.toLowerCase());
  });
}

/**
 * Sort flights by expected arrival time
 * 
 * @param flights 
 * @param sortByDate 
 * @returns array of flights
 */
const sortFlights = (flights: Flight[], sortByDate: SortTypes.ASC | SortTypes.DESC): Flight[] => {
  return flights.sort((a: Flight, b: Flight) => {
    /**
     * We have to parse the expectedTime string into a Date object
     * Should maybe be moved to a normalizer in the api service, or have the api return a full Date string
     */
    const aHours: number = parseInt(a.expectedTime.split(':')[0], 10);
    const aMinutes: number = parseInt(a.expectedTime.split(':')[1], 10);
    const aExpectedArrivalDateTime = new Date().setHours(aHours, aMinutes);

    const bHours: number = parseInt(b.expectedTime.split(':')[0], 10);
    const bMinutes: number = parseInt(b.expectedTime.split(':')[1], 10);
    const bExpectedArrivalDateTime = new Date().setHours(bHours, bMinutes);


    switch (sortByDate) {
      case SortTypes.ASC:
        return aExpectedArrivalDateTime - bExpectedArrivalDateTime;
      case SortTypes.DESC:
        return bExpectedArrivalDateTime - aExpectedArrivalDateTime;
      default:
        return 0;
    }
  });
}

exports = {
  getFlights,
  searchFlights,
  sortFlights
}
