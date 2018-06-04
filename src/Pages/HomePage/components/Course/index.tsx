// @flow
import  * as React from 'react';
import Item from "../../../../Components/ItemOne";
import Slider from "react-slick";

import "../../../../Components/Banner/slick/slick.css"; 
import "../../../../Components/Banner/slick/slick-theme.css";

interface ICourseProps {  datas: any[] }

export default class Course extends React.Component<ICourseProps,  {}> {
  
  static defaultProps = {};

  state = {
	  datas: [  {
        link: "/bai-viet/1",
        // tslint:disable-next-line:object-literal-sort-keys
        image: '/img/img-thumb-1.jpg',
        title: 'AI của Google đã có khả năng tự xác định phương hướng như con vật.',
        date: ' May 30, 2018',
        count_comment: 0,
        category_id: 1,
      },
      {
				link: "/bai-viet/1",
				  // tslint:disable-next-line:object-literal-sort-keys
        image: '/img/img-thumb-1.jpg',
        title: 'Giờ đây đã có thể chạy ứng dụng Linux trên Chromebook.',
        date: ' May 30, 2018',
        count_comment: 1,
        category_id: 1,
	  },
	  {
        link: "/bai-viet/1",
        // tslint:disable-next-line:object-literal-sort-keys
        image: '/img/img-thumb-1.jpg',
        title: 'Giờ đây đã có thể chạy ứng dụng Linux trên Chromebook.',
        date: ' May 30, 2018',
        count_comment: 1,
        category_id: 1,
      },
      {
        link: "/bai-viet/1",
        // tslint:disable-next-line:object-literal-sort-keys
        image: '/img/img-thumb-1.jpg',
        title: 'Hướng dẫn cài lại WordPress khi bị dính mã độc.',
        date: ' May 30, 2018',
        count_comment: 0,
        category_id: 1,
      }]
  }

  renderItem() {
	return this.state.datas.map((item, i) => (<Item key={i} data={item} className="thumb-article" />))
  }

  render() {

	const settings = {
		dots: true,
		infinite: true,
		slidesToShow: 3,
		// tslint:disable-next-line:object-literal-sort-keys
		slidesToScroll: 1,
		autoplay: true,
		speed: 500,
		autoplaySpeed: 5000,
		responsive: [
		  {
			breakpoint: 1024,
			settings: {
			  slidesToShow: 2,
			  // tslint:disable-next-line:object-literal-sort-keys
			  slidesToScroll: 2,
			  infinite: true,
			  autoplay: true,
			  dots: true
			}
		  },
		  {
			breakpoint: 600,
			settings: {
			  slidesToShow: 1,
			  // tslint:disable-next-line:object-literal-sort-keys
			  slidesToScroll: 1,
			  initialSlide: 1,
			  autoplay: true,
			}
		  }
		]
	  };
	  
  

    return (
		<div className="section">
		<div className="container">
			<div className="row">
				<div className="col-md-12">
					<div className="section-title">
						<h2 className="title">Khóa Học</h2>
						<div id="nav-carousel-2" className="custom-owl-nav pull-right">
							{/* video */}
						</div>
					</div>
					
					<Slider {...settings}>
						{ this.renderItem() }
					</Slider>
				</div>
			</div>
		</div>
	</div>
    )
  }
}