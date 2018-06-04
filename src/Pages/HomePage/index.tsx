// @flow
import * as React from 'react';
import Banner from '../../Components/Banner';
import Post from './components/Post';
import NewPost from './components/NewPost';
import Course from './components/Course';
import Popular from './components/Popular';

interface IHomePageState { categories: any[]; sliders: any[]; datas: any; populars: any[]; courses: any[]  }

class HomePage extends React.Component<{}, IHomePageState> {
  // @resolve(CategoryService)
  // categoryService;

  static defaultProps = {};
  static propTypes = {};

  UNSAFE_componentWillMount() {
   // this.categoryService.getlist().subscribe(value => this.setState({ categories: value }));
  }


  // tslint:disable-next-line:member-ordering
  state: IHomePageState = {
    categories: [
      {
        id: 1,
        name: "Công nghệ"
      },
      {
        id: 2,
        name: "Lập trình"
      }
    ],
    sliders: [
      {
        link: "/bai-viet/1",
        image: '/img/2.jpg',
        title: 'AI của Google đã có khả năng tự xác định phương hướng như con vật.',
        date: ' May 30, 2018',
        count_comment: 0
      },
      {
        link: "/bai-viet/1",
        image: '/img/1.jpeg',
        title: 'Giờ đây đã có thể chạy ứng dụng Linux trên Chromebook.',
        date: ' May 30, 2018',
        count_comment: 1
      },
      {
        link: "/bai-viet/1",
        image: '/img/1.jpeg',
        title: 'Hướng dẫn cài lại WordPress khi bị dính mã độc.',
        date: ' May 30, 2018',
        count_comment: 0
      }
    ],
    datas: [
      {
        link: "/bai-viet/1",
        image: '/img/2.jpg',
        title: 'AI của Google đã có khả năng tự xác định phương hướng như con vật.',
        date: ' May 30, 2018',
        count_comment: 0,
        category_id: 1,
      },
      {
        link: "/bai-viet/1",
        image: '/img/1.jpeg',
        title: 'Giờ đây đã có thể chạy ứng dụng Linux trên Chromebook.',
        date: ' May 30, 2018',
        count_comment: 1,
        category_id: 1,
      },
      {
        link: "/bai-viet/1",
        image: '/img/1.jpeg',
        title: 'Hướng dẫn cài lại WordPress khi bị dính mã độc.',
        date: ' May 30, 2018',
        count_comment: 0,
        category_id: 1,
      }
    ],
    populars: [

    ],
    courses: [

    ]
  };

  tranformer(datas: any) {
    return {
      link: `/bai-viet/${datas.id}`,
      image: '/img/1.jpeg',
      title: datas.name,
      date: datas.date,
      count_comment: 0,
      category_id: datas.category_id,
    }
  }

  render() {
    return [
      <Banner key="banner" datas={this.state.sliders} />,
      <NewPost key="new_post" datas={[]} />,      
      <Post key="post"  categories={this.state.categories} datas={this.state.datas} />,
      <Course key="course"  datas={this.state.courses} />,
      <Popular key="popular"  datas={this.state.populars}  />
    ]
  }
}

export default HomePage;