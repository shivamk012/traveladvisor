import Card from "./Card";

export default function Listitems() {
  const listofItems = [
    {
      imgLink : 'https://wallpapers.com/images/featured/space-sjryfre8k8f6i3ge.jpg',
      name : 'Kebabville',
      rating : 3.5,
      numberOfReviews : 1001,
      price : '$10 - $15',
      cuisine : ['Indian' , 'Barbecue' , 'Asian' , 'Vegetarian Friendly']
    },
    {
      imgLink : 'https://wallpapers.com/images/featured/space-sjryfre8k8f6i3ge.jpg',
      name : 'Kebabville',
      rating : 3,
      numberOfReviews : 1001,
      price : '$10 - $15',
      cuisine : ['Indian' , 'Barbecue' , 'Asian' , 'Vegetarian Friendly' , 'Indian']
    },
    {
      imgLink : 'https://wallpapers.com/images/featured/space-sjryfre8k8f6i3ge.jpg',
      name : 'Kebabville',
      rating : 3.5,
      numberOfReviews : 1001,
      price : '$10 - $15',
      cuisine : ['Indian' , 'Barbecue' , 'Asian' , 'Vegetarian Friendly']
    },
    {
      imgLink : 'https://wallpapers.com/images/featured/space-sjryfre8k8f6i3ge.jpg',
      name : 'Kebabville',
      rating : 3.5,
      numberOfReviews : 1001,
      price : '$10 - $15',
      cuisine : ['Indian' , 'Barbecue' , 'Asian' , 'Vegetarian Friendly']
    },
    {
      imgLink : 'https://wallpapers.com/images/featured/space-sjryfre8k8f6i3ge.jpg',
      name : 'Kebabville',
      rating : 3.5,
      numberOfReviews : 1001,
      price : '$10 - $15',
      cuisine : ['Indian' , 'Barbecue' , 'Asian' , 'Vegetarian Friendly']
    },
    {
      imgLink : 'https://wallpapers.com/images/featured/space-sjryfre8k8f6i3ge.jpg',
      name : 'Kebabville',
      rating : 3.5,
      numberOfReviews : 1001,
      price : '$10 - $15',
      cuisine : ['Indian' , 'Barbecue' , 'Asian' , 'Vegetarian Friendly']
    },
    {
      imgLink : 'https://wallpapers.com/images/featured/space-sjryfre8k8f6i3ge.jpg',
      name : 'Kebabville',
      rating : 3.5,
      numberOfReviews : 1001,
      price : '$10 - $15',
      cuisine : ['Indian' , 'Barbecue' , 'Asian' , 'Vegetarian Friendly']
    }
  ]

  return (
    <Card items={listofItems}/>
  )
}
