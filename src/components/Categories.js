import React from 'react'

import '../Styles.css'

export default function Categories(props) {

  const active = (e) => {
    let cuurentLink = document.getElementById(e.target.id);
    let lists = document.getElementsByClassName("a");
    for (let list of lists) {
      list.classList.remove("active");
    }
    // console.log(e.target.id);
    cuurentLink.classList.add("active");
  };

  return (
    <div>



      {/* // <ul style={{listStyle:'none'}}>
      //   <li>
      //     A
      //   </li>
      //   <li>
      //     A
      //   </li>
      //   <li>
      //     A
      //   </li>
      //   <li>
      //     A
      //   </li>
      // </ul>
       */}
      {/* <ul className="nav flex-column bg-white mb-0" style={{opacity:'0.7'}}>
      <li className="nav-item">
        <a href={props.null} className="nav-link text-dark font-italic active" id="1" onClick={props.active}>
                  All Items
              </a>
      </li>
      <li className="nav-item">
        <a href={props.null} className="nav-link text-dark font-italic a" id="2" onClick={props.active}>
                  Birds
              </a>
      </li>
      <li className="nav-item">
        <a href={props.null} className="nav-link text-dark font-italic a" id="3" onClick={props.active}>
                  Cat
              </a>
      </li>
      <li className="nav-item">
        <a href={props.null} className="nav-link text-dark font-italic a" id="4" onClick={props.active}>
                  Dog
              </a>
      </li>
      <li className="nav-item">
        <a href={props.null} className="nav-link text-dark font-italic a" id="5" onClick={props.active}>
                  Fish
              </a>
      </li>
    </ul> */}

<div className='categories'>
          <h5 className="mb-2 fw-bold">Categories</h5>
          {/* <p className="mb-0  fw-bold "> */}
            <a
              id="1"
              onClick={active}
              className="a active"
              href={props.null}
            >
              All Items
            </a>
          {/* </p> */}
          <p className="mb-0 fw-bold">
            <a
              id="2"
              onClick={active}
              className="a"
              href={props.null}
            >
              Bird
            </a>
          </p>
          <p className="mb-0 fw-bold">
            <a
              id="3"
              onClick={active}
              className="a"
              href={props.null}
            >
              Cat
            </a>
          </p>
          <p className="mb-0 fw-bold">
            <a
              id="4"
              onClick={active}
              className="a"
              href={props.null}
            >
              Bird
            </a>
          </p>
          <p className="mb-0 fw-bold">
            <a
              id="5"
              onClick={active}
              className="a"
              href={props.null}
            >
              Fish
            </a>
          </p>
        </div>

    {/* <div>
          <h5 className="mb-2 fw-bold">Categories</h5>
          <p className="mb-0  fw-bold ">
            <a
              id="1"
              onClick={props.active}
              className="a active"
              href={props.null}
            >
              All Items
            </a>
          </p>
          <p className="mb-0 fw-bold">
            <a
              id="2"
              onClick={props.active}
              className="a"
              href={props.null}
            >
              Bird
            </a>
          </p>
          <p className="mb-0 fw-bold">
            <a
              id="3"
              onClick={props.active}
              className="a"
              href={props.null}
            >
              Cat
            </a>
          </p>
          <p className="mb-0 fw-bold">
            <a
              id="4"
              onClick={props.active}
              className="a"
              href={props.null}
            >
              Bird
            </a>
          </p>
          <p className="mb-0 fw-bold">
            <a
              id="5"
              onClick={props.active}
              className="a"
              href={props.null}
            >
              Fish
            </a>
          </p>
        </div> */}
  </div>
  )
}
