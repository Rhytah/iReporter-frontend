import React, { Component } from 'react';
import { Button, PageHeader, Layout } from 'antd';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import fetchRedflags from '../../storeRedux/actions/redflags';
import Loading from '../common/Loading';
import '../../assets/css/Redflags.css';

const { Content } = Layout;

export class Redflags extends Component {
  componentDidMount() {
    const { fetchRedflags } = this.props;
    fetchRedflags();
  }

  render() {
    const { data, isFetching } = this.props;

    if (isFetching) {
      return <Loading />;
    }

    return (
      <div>
        <Layout className="layout">


          <PageHeader
            className="site-page-header"
            onBack={() => window.history.back()}
            title="Redflags"
            subTitle="Reported incidents for action so far"
          >
            <Button type="primary">
              <Link className="nav-link" to="/redflags/add">
            Add Redflag
              </Link>
            </Button>

          </PageHeader>
          <div className="text-center profile-card" />
          <Content style={{ padding: '0 50px' }}>
            <div className="site-layout-content">
              <div className="container">
                <div className="row">
                  {data.map(redflag => (
                    <div className="container" key={redflag.redflag_id}>
                      <div className="panel panel-default">
                        <div className="panel-heading">
                          <div className="btn-group" style={{ float: 'right' }}>
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
                                <a href="/redflags">
                                  <span
                                    className="glyphicon glyphicon-pencil"
                                    aria-hidden="true"
                                  />
                            Edit
                                </a>
                              </li>
                              <li role="separator" className="divider" />
                              <li>
                                <a href="/">
                                  <span
                                    className="glyphicon glyphicon-remove-circle"
                                    aria-hidden="true"
                                  />
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
                                {redflag.location}
                                <br />
                          Created on:
                                {redflag.created_on}
                              </div>
                        Status:
                              {redflag.status}
                              <div
                                className="btn-group"
                                role="group"
                                id="BegeniButonlari"
                              >
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
                  ))}
                  {data.length === 0 && <h1>No red flags yet</h1>}
                </div>
              </div>
            </div>
          </Content>
        </Layout>
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
  data: PropTypes.arrayOf(
    PropTypes.shape({
      comment: PropTypes.string,
      image: PropTypes.string,
      video: PropTypes.string,
      status: PropTypes.string,
    }),
  ).isRequired,
};
export const mapStateToProps = ({ redflags }) => {
  const { data, isFetching } = redflags;
  return { data, isFetching };
};
export default connect(
  mapStateToProps,
  { fetchRedflags },
)(Redflags);
