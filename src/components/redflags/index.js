import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import fetchRedflags from '../../storeRedux/actions/redflags';

import Loading from '../common/Loading';
import '../../assets/css/Redflags.css';

export class Redflags extends Component {
  componentDidMount() {
    const { fetchRedflags } = this.props;
    fetchRedflags();
  }

  render() {
    const { redflags, isFetching } = this.props;

    const redflagsList = redflags.map(redflag => (
      <div className="container" key={redflag.redflag_id}>
        <div className="panel panel-default">
          <div className="panel-heading">
            <a href="/" className="MakaleYazariAdi">
              {redflag.redflag_id}
            </a>
            <div className="btn-group">
              <button
                type="button"
                className="btn btn-danger dropdown-toggle"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <span className="glyphicon glyphicon-cog" />
                <span className="sr-only">Toggle Dropdown</span>
              </button>
              <ul className="dropdown-menu">
                <li>
                  <a href="/">
                    <span className="glyphicon glyphicon-pencil" aria-hidden="true" />
                    {' '}
Edit
                  </a>
                </li>
                <li role="separator" className="divider" />
                <li>
                  <a href="/">
                    <span className="glyphicon glyphicon-remove-circle" aria-hidden="true" />
                    {' '}
Delete
                  </a>
                </li>
              </ul>
            </div>
            <div className="clearfix" />
          </div>
          <div className="panel-body">
            <div className="media">
              <div className="media-left">
                <a href="/">
                  <img
                    className="media-object"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Canis_lupus.jpg/260px-Canis_lupus.jpg"
                    alt="Kurt"
                  />
                </a>
              </div>
              <div className="media-body">
                <h4 className="media-heading">{redflag.comment}</h4>
                {redflag.image}
                <div className="clearfix">
                  location:
                  {redflag.lat}
,
                  {redflag.long}
                  <br />
                  Created on:
                  {' '}
                  {redflag.created_on}
                </div>
                {redflag.status}
                <div className="btn-group" role="group" id="BegeniButonlari">
                  <button type="button" className="btn btn-default">
                    <span className="glyphicon glyphicon-thumbs-up" />
                  </button>
                  <button type="button" className="btn btn-default">
                    <span className="glyphicon glyphicon-thumbs-down" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    ));
    if (isFetching) {
      return <Loading className="article-loader" />;
    }
    return (
      <div>
        <div className="text-center profile-card" />
        <div className="container">
          <div className="row">{redflagsList}</div>
        </div>
      </div>
    );
  }
}

Redflags.defaultProps = {
  isFetching: false,
  fetchRedflags: () => {},
};

Redflags.propTypes = {
  fetchRedflags: PropTypes.func,
  isFetching: PropTypes.bool,
  redflags: PropTypes.arrayOf(
    PropTypes.shape({
      comment: PropTypes.string,
      image: PropTypes.string,
      video: PropTypes.string,
      status: PropTypes.string,
    }),
  ).isRequired,
};
export const mapStateToProps = (state) => {
  const { redflags, isFetching } = state.redflagsReducer;

  return {
    redflags,
    isFetching,
  };
};
export default connect(
  mapStateToProps,
  { fetchRedflags },
)(Redflags);
