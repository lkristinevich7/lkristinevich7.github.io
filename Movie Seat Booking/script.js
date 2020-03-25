const container = document.querySelector('.container');
const seats= document.querySelectorAll('.row .seat:not(.occupied)');
const count = document.getElementById('count');
const total = document.getElementById('total');
const movieSelect = document.getElementById('movie');

fillUI()

let ticketPrice= parseInt(movieSelect.value);

//Save selected movie index and price
function setMovieData(movieIndex, moviePrice){
    localStorage.setItem('selectedMovieIndex', movieIndex);
    localStorage.setItem('selectedMoviePrice', moviePrice)

}
function updateSelectedCount(){
    const selectedSeats=document.querySelectorAll('.row .seat.selected');
    const seatsIndex = [...selectedSeats].map(function(seat){
        return [...seats].indexOf(seat)
    })

    localStorage.setItem('selectedSeats', JSON.stringify(seatsIndex));

    const selectedSeatsCount = selectedSeats.length;

    count.innerText=selectedSeatsCount;
    total.innerText=selectedSeatsCount * ticketPrice;
}
//Get data from localstorage and fill UI 
function fillUI(){
    const selectedSeats = JSON.parse(localStorage.getItem('selectedSeats'));
    console.log(selectedSeats)
    if (selectedSeats !==null && selectedSeats.length>0){
        seats.forEach((seat, index)=>{
            if(selectedSeats.indexOf(index)>-1){
                seat.classList.add('selected')

            }
        })
    }
    const selectedMovieindex= localStorage.getItem('selectedMovieIndex')

    if (selectedMovieindex !==null){
        movieSelect.selectedIndex= selectedMovieindex;
    }

}
//Movie select event
movieSelect.addEventListener('change', e=>{
    console.log(e.target)
    ticketPrice = +e.target.value
    // console.log(e.target.selectedIndex, e.target.value)
    setMovieData(e.target.selectedIndex, e.target.value)
    updateSelectedCount()
})
//Seat click event
container.addEventListener('click', (e)=>{

    if(e.target.classList.contains('seat')&& 
    !e.target.classList.contains('occupied')) {
        // console.log(e.target)
        e.target.classList.toggle('selected');

        updateSelectedCount()
    }
})
//Initial count and total set
updateSelectedCount();
