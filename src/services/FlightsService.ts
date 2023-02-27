/**
 * Service for interacting with the flights API
 */
import { Flight } from "../types/Flight";

enum SortTypes {
  ASC = "ASC",
  DESC = "DESC",
}

export default class FlightsService {
  private static apiBase = '/api';

  public static getFlights(): Promise<Flight[]> {
    return fetch(`${this.apiBase}/flights`)
      .then(data => data.json())
  }


  public static searchFlights(flights: Flight[], searchTerm: string): Flight[] {
    return flights.filter((flight: Flight) => {
      return flight.airport.toLowerCase().includes(searchTerm.toLowerCase());
    });
  }

  public static sortFlights(flights: Flight[], sortByDate: SortTypes.ASC | SortTypes.DESC): Flight[] {
    return flights.sort((a: Flight, b: Flight) => {
      /**
       * We have to parse the expectedTime string into a Date object
       * Should maybe be moved to a normalizer in the api service, or have the api return a full Date string
       */
      const aHours = parseInt(a.expectedTime.split(':')[0], 10);
      const aMinutes = parseInt(a.expectedTime.split(':')[1], 10);
      const aExpectedArrivalDateTime = new Date().setHours(aHours, aMinutes);

      const bHours = parseInt(b.expectedTime.split(':')[0], 10);
      const bMinutes = parseInt(b.expectedTime.split(':')[1], 10);
      const bExpectedArrivalDateTime = new Date().setHours(bHours, bMinutes);

      console.log('SortTypes', sortByDate)

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

}