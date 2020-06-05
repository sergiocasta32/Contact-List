import React, { useContext } from "react";
import RigoPhoto from "../../img/rigo-baby.jpg";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import "../../styles/home.scss";

export const ContactCard = () => {
	const { store, actions } = useContext(Context);
	return (
		<div>
			{store.contactList &&
				store.contactList.map((item, index) => {
					return (
						<li className="list-group-item" key={index}>
							<div className="row w-100">
								<div className="col-12 col-sm-6 col-md-3 px-0">
									<img
										src={RigoPhoto}
										alt="Mike Anamendolla"
										className="img rounded-circle mx-auto d-block img-fluid"
									/>
								</div>
								<div className="col-12 col-sm-6 col-md-9 text-center text-sm-left">
									<div className=" float-right">
										<Link to={`/edit/${index}`}>
											<button className="btn">
												<i className="fas fa-pencil-alt mr-3" />
											</button>
										</Link>
										<button
											className="btn"
											onClick={() => {
												actions.deleteContact(item.id);
											}}>
											<i className="fas fa-trash-alt" />
										</button>
									</div>
									<label className="name lead">{item.full_name}</label>
									<br />
									<i className="fas fa-map-marker-alt text-muted mr-3" />
									<span className="text-muted">{item.address}</span>
									<br />
									<span
										className="fa fa-phone fa-fw text-muted mr-3"
										data-toggle="tooltip"
										title=""
										data-original-title="(870) 288-4149"
									/>
									<span className="text-muted small">{item.phone}</span>
									<br />
									<span
										className="fa fa-envelope fa-fw text-muted mr-3"
										data-toggle="tooltip"
										data-original-title=""
										title=""
									/>
									<span className="text-muted small text-truncate">{item.email}</span>
								</div>
							</div>
						</li>
					);
				})}
		</div>
	);
};
