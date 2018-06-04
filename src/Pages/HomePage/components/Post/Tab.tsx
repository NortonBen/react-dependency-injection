// @flow
import * as React from 'react';
import Item from '../../../../Components/ItemOne';
import ItemTwo from '../../../../Components/ItemTwo';

interface ITabProps { categories: any[], active: any, datas: any[] }
interface ITabState {  datas: any[]}


class Tab extends React.Component<ITabProps, ITabState> {

  static defaultProps = {};
  static propTypes = {};

  UNSAFE_componentWillReceiveProps(nextProps: any) {
    // code
  }

  // tslint:disable-next-line:member-ordering
  state: ITabState = {
      datas: [
        {
            link: "/bai-viet/1",
            image: '/img/img-md-1.jpg',
            title: 'AI của Google đã có khả năng tự xác định phương hướng như con vật.',
            date: ' May 30, 2018',
            count_comment: 0,
            category_id: 1,
        },
        {
            link: "/bai-viet/1",
            image: '/img/img-md-1.jpg',
            title: 'Giờ đây đã có thể chạy ứng dụng Linux trên Chromebook.',
            date: ' May 30, 2018',
            count_comment: 1,
            category_id: 1,
        },
        {
            link: "/bai-viet/1",
            image: '/img/img-md-1.jpg',
            title: 'Hướng dẫn cài lại WordPress khi bị dính mã độc.',
            date: ' May 30, 2018',
            count_comment: 0,
            category_id: 1,
        },
        {
            link: "/bai-viet/1",
            image: '/img/img-md-1.jpg',
            title: 'Hướng dẫn cài lại WordPress khi bị dính mã độc.',
            date: ' May 30, 2018',
            count_comment: 0,
            category_id: 1,
        },
        {
            link: "/bai-viet/1",
            image: '/img/img-widget-1.jpg',
            title: 'Hướng dẫn cài lại WordPress khi bị dính mã độc.',
            date: ' May 30, 2018',
            count_comment: 0,
            category_id: 1,
        },
        {
            link: "/bai-viet/1",
            image: '/img/img-widget-1.jpg',
            title: 'Hướng dẫn cài lại WordPress khi bị dính mã độc.',
            date: ' May 30, 2018',
            count_comment: 0,
            category_id: 1,
        },
        {
            link: "/bai-viet/1",
            image: '/img/img-widget-1.jpg',
            title: 'Hướng dẫn cài lại WordPress khi bị dính mã độc.',
            date: ' May 30, 2018',
            count_comment: 0,
            category_id: 1,
        },
        {
            link: "/bai-viet/1",
            image: '/img/img-widget-1.jpg',
            title: 'Hướng dẫn cài lại WordPress khi bị dính mã độc.',
            date: ' May 30, 2018',
            count_comment: 0,
            category_id: 1,
        },
        {
            link: "/bai-viet/1",
            image: '/img/img-widget-1.jpg',
            title: 'Hướng dẫn cài lại WordPress khi bị dính mã độc.',
            date: ' May 30, 2018',
            count_comment: 0,
            category_id: 1,
        }
      ]
  }

  renderMain() {
    const datas = this.state.datas;
    const items = [];
    for(let i =0; i < 4; i++) {
        items.push(
            <div key={i}  className="col-md-3 col-sm-6">
                <Item key={i}  data={datas[i]} className="" />
            </div>
        )
    }

    return items;
  }

  renderExtra(i: number, j: number) {
    const datas = this.state.datas;
    const items = [];
    for(i; i < j ; i++) {
        if (i === this.state.datas.length) {
            break;
        }
        items.push(
            <ItemTwo key={i}  data={datas[i]} className="widget-article" />
        )
    }

    return items;
  }


  render() {
    return (
        <div className="tab-pane fade in active">
        <div className="row">
            { this.renderMain() }
        </div>
        
        <div className="row">
            <div className="col-md-4 col-sm-6">
                { this.renderExtra(4,6) }
            </div>
            
            <div className="col-md-4 col-sm-6">
                { this.renderExtra(6,8) }
            </div>
            
            <div className="col-md-4 hidden-sm">
                { this.renderExtra(8,10) }
            </div>
        </div>
    </div>
    )
  }
}

export default Tab;