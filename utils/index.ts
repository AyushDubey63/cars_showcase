const url = "https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla";
const options = {
  method: "GET",
  headers: {},
};

try {
  const response = await fetch(url, options);
  const result = await response.text();
  console.log(result);
} catch (error) {
  console.error(error);
}

export async function fetchCars() {
  const header = {
    "X-RapidAPI-Key": "71c8839f9dmsh5bfe7d88e933269p1da1b9jsn5e96811146c1",
    "X-RapidAPI-Host": "cars-by-api-ninjas.p.rapidapi.com",
  };
}
