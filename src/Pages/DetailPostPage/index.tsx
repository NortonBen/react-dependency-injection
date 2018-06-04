// @flow
import * as React from 'react';
import Content from './components/Content';
import Featured from './components/Featured';
import Most from './components/Most';
import Tag from '../../Components/Tag';
import Comment from '../../Components/Comment';
import Breadcrumb from '../../Components/Breadcrumb';

class DetailPostPage extends React.Component {

	state = {

	}
  
  render() {
    return(
		<div className="section">
			<div className="container">
				<div className="row">
					<div className="col-md-8">
							<Breadcrumb />
							<Content />
							<Tag />
							<Comment />
					</div>
					<div className="col-md-4">
							<Most />
							<Featured />
					</div>
				</div>
			</div>
		</div>
      );
  }
}

export default DetailPostPage;