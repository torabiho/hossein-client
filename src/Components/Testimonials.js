import React, { Component } from 'react';
// {
//   "text1":"Hossein was a meticulous hard worker with good attention to details, and a willingness to learn new concepts and methods even though he worked independently most of the time. I would have no issue with hiring Hossein again, and really feel he would fit in almost anywhere.",
//   "user1": "Tim Griffin - J M Kelly Group"
// }
class Testimonials extends Component {
  render() {

    if(this.props.data){
      var testimonials = this.props.data.testimonials.map(function(testimonials){
        return  <li key={testimonials.user}>
            <blockquote>
               <p>{testimonials.text}</p>
               <cite>{testimonials.user}</cite>
            </blockquote>
         </li>
      })
    }

    return (
      <section id="testimonials">
      <div className="text-container">
         <div className="row">

            <div className="two columns header-col">
               <h1><span>Client Testimonials</span></h1>
            </div>

            <div className="ten columns flex-container">
                  <ul className="slides">
                      {testimonials}
                  </ul>
               </div>
            </div>
         </div>
   </section>
    );
  }
}

export default Testimonials;
