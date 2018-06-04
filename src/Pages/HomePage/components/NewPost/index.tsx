// @flow
import  * as React from 'react';

import Item from '../../../../Components/ItemOne';
import ItemTwo from '../../../../Components/ItemTwo';
import Subscribe from './Subscribe';

interface INewPostProps { datas: any[] }
interface INewPostSate { datas: any[] }

export default class NewPost extends React.Component<INewPostProps, INewPostSate> {
  
  static defaultProps = {};

  
  state: INewPostSate = {
	datas: [
	  {
		  link: "/bai-viet/1",
		  image: '/img/img-sm-3.jpg',
		  title: 'AI của Google đã có khả năng tự xác định phương hướng như con vật.',
		  description: 'Populo tritani laboramus ex mei, no eum iuvaret ceteros euripidis, ne alia sadipscing mei. Te inciderint cotidieque pro, ei iisque docendi qui, ne accommodare theophrastus reprehendunt vel. Et commodo menandri eam',
		  date: ' May 30, 2018',
		  count_comment: 0,
		  category_id: 1,
	  },
	  {
		  link: "/bai-viet/1",
		  image: '/img/img-sm-3.jpg',
		  title: 'Giờ đây đã có thể chạy ứng dụng Linux trên Chromebook.',
		  description: 'Populo tritani laboramus ex mei, no eum iuvaret ceteros euripidis, ne alia sadipscing mei. Te inciderint cotidieque pro, ei iisque docendi qui, ne accommodare theophrastus reprehendunt vel. Et commodo menandri eam',
		  date: ' May 30, 2018',
		  count_comment: 1,
		  category_id: 1,
	  },
	  {
			link: "/bai-viet/1",
			image: '/img/img-md-1.jpg',
			title: 'AI của Google đã có khả năng tự xác định phương hướng như con vật.',
			description: 'Populo tritani laboramus ex mei, no eum iuvaret ceteros euripidis, ne alia sadipscing mei. Te inciderint cotidieque pro, ei iisque docendi qui, ne accommodare theophrastus reprehendunt vel. Et commodo menandri eam',
			date: ' May 30, 2018',
			count_comment: 0,
			category_id: 1,
		},
		{
			link: "/bai-viet/1",
			image: '/img/img-md-1.jpg',
			title: 'Giờ đây đã có thể chạy ứng dụng Linux trên Chromebook.',
			description: 'Populo tritani laboramus ex mei, no eum iuvaret ceteros euripidis, ne alia sadipscing mei. Te inciderint cotidieque pro, ei iisque docendi qui, ne accommodare theophrastus reprehendunt vel. Et commodo menandri eam',
			date: ' May 30, 2018',
			count_comment: 1,
			category_id: 1,
		},
		{
			link: "/bai-viet/1",
			image: '/img/img-md-1.jpg',
			title: 'AI của Google đã có khả năng tự xác định phương hướng như con vật.',
			description: 'Populo tritani laboramus ex mei, no eum iuvaret ceteros euripidis, ne alia sadipscing mei. Te inciderint cotidieque pro, ei iisque docendi qui, ne accommodare theophrastus reprehendunt vel. Et commodo menandri eam',
			date: ' May 30, 2018',
			count_comment: 0,
			category_id: 1,
		},
		{
			link: "/bai-viet/1",
			image: '/img/img-md-1.jpg',
			title: 'Giờ đây đã có thể chạy ứng dụng Linux trên Chromebook.',
			description: 'Populo tritani laboramus ex mei, no eum iuvaret ceteros euripidis, ne alia sadipscing mei. Te inciderint cotidieque pro, ei iisque docendi qui, ne accommodare theophrastus reprehendunt vel. Et commodo menandri eam',
			date: ' May 30, 2018',
			count_comment: 1,
			category_id: 1,
		},
		{
			link: "/bai-viet/1",
			image: '/img/img-md-1.jpg',
			title: 'AI của Google đã có khả năng tự xác định phương hướng như con vật.',
			description: 'Populo tritani laboramus ex mei, no eum iuvaret ceteros euripidis, ne alia sadipscing mei. Te inciderint cotidieque pro, ei iisque docendi qui, ne accommodare theophrastus reprehendunt vel. Et commodo menandri eam',
			date: ' May 30, 2018',
			count_comment: 0,
			category_id: 1,
		},
		{
			link: "/bai-viet/1",
			image: '/img/img-md-1.jpg',
			title: 'Giờ đây đã có thể chạy ứng dụng Linux trên Chromebook.',
			description: 'Populo tritani laboramus ex mei, no eum iuvaret ceteros euripidis, ne alia sadipscing mei. Te inciderint cotidieque pro, ei iisque docendi qui, ne accommodare theophrastus reprehendunt vel. Et commodo menandri eam',
			date: ' May 30, 2018',
			count_comment: 1,
			category_id: 1,
		},
		{
			link: "/bai-viet/1",
			image: '/img/img-widget-1.jpg',
			title: 'AI của Google đã có khả năng tự xác định phương hướng như con vật.',
			description: 'Populo tritani laboramus ex mei, no eum iuvaret ceteros euripidis, ne alia sadipscing mei. Te inciderint cotidieque pro, ei iisque docendi qui, ne accommodare theophrastus reprehendunt vel. Et commodo menandri eam',
			date: ' May 30, 2018',
			count_comment: 0,
			category_id: 1,
		},
		{
			link: "/bai-viet/1",
			image: '/img/img-widget-1.jpg',
			title: 'Giờ đây đã có thể chạy ứng dụng Linux trên Chromebook.',
			description: 'Populo tritani laboramus ex mei, no eum iuvaret ceteros euripidis, ne alia sadipscing mei. Te inciderint cotidieque pro, ei iisque docendi qui, ne accommodare theophrastus reprehendunt vel. Et commodo menandri eam',
			date: ' May 30, 2018',
			count_comment: 1,
			category_id: 1,
		},
	]
}


  renderMain() {
    const datas = this.state.datas;
    const items = [];
    for(let i =0; i < 2; i++) {
		if (i === datas.length) {
			break;
		}
        items.push(
            <div  key={i}  className="col-md-6 col-sm-6">
                <Item  key={i}  data={datas[i]} className="" />
            </div>
        )
    }
    return items;
  }

  renderExtra() {
    const datas = this.state.datas;
    const items = [];
    for(let i = 2; i < 5; i++) {
		if (i === datas.length) {
			break;
		}
        items.push(
            <div key={i} className="col-md-4 col-sm-4">
                <ItemTwo  key={i}  data={datas[i]} className="" />
            </div>
        )
    }
    return items;
  }

  renderReadMore() {
	const datas = this.state.datas;
    const items = [];
    for(let i = 5; i < 10; i++) {
		if (i === datas.length) {
			break;
		}
        items.push(<ItemTwo  key={i}  data={datas[i]} className="widget-article" />);
   }

    return items;
  }

  render() {

    return (
		<div className="section">
		<div className="container">
			<div className="row">
				<div className="col-md-8">
					
					<div className="row">
						<div className="col-md-12">
							<div className="section-title">
								<h2 className="title">Tin Mới</h2>
							</div>
						</div>
						
						{ this.renderMain() }
						
					</div>
					
					<div className="row">
						{ this.renderExtra() }
					</div>
				</div>
				
				<div className="col-md-4">
					
					<Subscribe />
					
					<div className="widget">
						<div className="widget-title">
							<h2 className="title">Xem Thêm</h2>
						</div>
						{ this.renderReadMore() }
						
					</div>
				</div>
			</div>
		</div>
	</div>
    )
  }
}