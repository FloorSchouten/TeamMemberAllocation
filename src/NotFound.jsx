import dog from './Images/dog.jpg'

const NotFound = () => {
  return (
  <header className="container" >
    <div className="row justify-content-center mt-3 mb-4">
      <div className="col-8" >
        <h1 className="text-danger">Oh no! Page not found..</h1>
        <img className="dogPicture" src={dog}/>
      </div>
    </div>
  </header>
    
    )
}
    export default NotFound