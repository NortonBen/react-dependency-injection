// @flow
import * as React from 'react';

class TopFooter extends React.Component {
  static defaultProps = {};
  static propTypes = {};

  state = {};

  render() {
    return(
        <div id="bottom-footer" className="section">
        <div className="container">
            <div className="row">
                <div className="col-md-6 col-md-push-6">
                    <ul className="footer-links">
                        <li><a href="#">About us</a></li>
                        <li><a href="#">Contact</a></li>
                        <li><a href="#">Advertisement</a></li>
                        <li><a href="#">Privacy</a></li>
                    </ul>
                </div>
                
                <div className="col-md-6 col-md-pull-6">
                    <div className="footer-copyright">
                        <span>
                            Copyright &copy;<script>document.write(new Date().getFullYear());</script> All rights reserved | This template is made with <i className="fa fa-heart-o" aria-hidden="true"/> by <a href="https://colorlib.com" target="_blank">Colorlib</a>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
  }
}

export default TopFooter;