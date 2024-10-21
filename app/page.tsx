import AdComponent from './components/AdComponent';

export default function Home() {
  return (
    <>


{/*
AdComponent takes 3 main inputs (props):
1. startDate: The start date and time of the ad.
2. endDate: The end date and time of the ad.
3. adText: The text of the ad.

The goal of this component is to show the ad text only during the time 
between the startDate and endDate. If the current time is inside this range, 
the ad will show on the screen. If the current time is outside this range, 
nothing will show.
*/}

<AdComponent 
// startDate: The ad starts on October 20, 2024, at 10:00 AM
startDate="2024-10-20T10:00:00" 

// endDate: The ad ends on October 25, 2024, at 11:59:59 PM
endDate="2024-10-25T23:59:59" 

// adText: The text of the ad (Special offer on all products)
adText="Special offer on all products" 
/>

  
  </>
  );
}
