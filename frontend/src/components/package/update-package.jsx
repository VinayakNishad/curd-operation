import React, { useState, useEffect } from "react";
import axios from "axios";
import Select from "react-select";
import { useNavigate } from "react-router-dom";
import "../style.css";

const Package = (props) => {
    const pkg = props.pkg
    

    const [formData, setFormData] = useState({
        package_id: pkg._id,
        package_name: pkg.package_name,
        package_price: pkg.package_price,
        package_photographer: pkg.package_photographer,
        package_caterer: pkg.package_caterer,
        package_hall: pkg.package_hall,
        package_bartender: pkg.package_bartender,
        package_decoration: pkg.package_decoration,
        package_description: pkg.package_description
    });

    const [image, setImage] = useState(null);
    const [service, setService] = useState("");
    const navigate = useNavigate();

    const [photographerOptions, setPhotographerOptions] = useState([]);
    const [catererOptions, setCatererOptions] = useState([]);
    const [hallOptions, setHallOptions] = useState([]);
    const [bartenderOptions, setBartenderOptions] = useState([]);
    const [decorationOptions, setDecorationOptions] = useState([]);

    const fetchStudios = async (serviceType) => {
        try {
            const response = await axios.get("http://localhost:3001/getStudios", {
                params: {
                    service: serviceType
                }
            });
            console.log("Adding Packges", response);

            const options = response.data.map((studio) => ({
                value: studio.studio_name,
                label: studio.studio_name,
            }));

            if (serviceType === "Photographer") {
                setPhotographerOptions(options);
            } else if (serviceType === "Caterer") {
                setCatererOptions(options);
            } else if (serviceType === "Hall") {
                setHallOptions(options);
            } else if (serviceType === "Bartender") {
                setBartenderOptions(options);
            } else if (serviceType === "Decoration") {
                setDecorationOptions(options);
            }
        } catch (error) {
            console.error("Error fetching studios:", error);
        }
    };

    useEffect(() => {
        fetchStudios(service);
    }, [service]);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handlePhotographerChange = (selectedOptions) => {
        const values = selectedOptions.map(option => option.value);
        console.log(values);

        if (service === "Photographer") {
            setFormData({ ...formData, package_photographer: values });
        }
        else if (service === "Caterer") {
            setFormData({ ...formData, package_caterer: values });
        }
        else if (service === "Hall") {
            setFormData({ ...formData, package_hall: values });
        }
        else if (service === "Bartender") {
            setFormData({ ...formData, package_bartender: values });
        }
        else if (service === "Decoration") {
            setFormData({ ...formData, package_decoration: values });
        }
    };

    const handleImageChange = (e) => {
        setImage(e.target.files[0]);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formDataWithImage = new FormData();

        console.log("Form Data:", formData);
        

        Object.keys(formData).forEach((key) => {
            const value = formData[key];

            if (Array.isArray(value)) {
                value.forEach((item) => {
                    formDataWithImage.append(`${key}[]`, item);
                });
            } else {
                formDataWithImage.append(key, value);
            }
        });

        console.log("Form Data with Image:", formDataWithImage);
        


        if (image) {
            formDataWithImage.append("package_image", image);
        }

        try {
            // console.log(props.packageType);
            console.log("Form Data with Image:", formDataWithImage);
            
            
            await axios.post("http://localhost:3001/update_package", formDataWithImage, {
                params: {
                    packageType: props.packageType
                }
            }, {
                headers: { "Content-Type": "multipart/form-data" },
            });

            // Reset form
            setFormData({
                package_id: "",
                package_name: "",
                package_price: 0,
                package_photographer: [],
                package_caterer: [],
                package_hall: [],
                package_bartender: [],
                package_decoration: [],
                package_description: ""
            });
            setImage(null);
            alert("Package added successfully!");
            props.setShow(false);
            navigate("/get_package");
        } catch (error) {
            console.error("Error adding package:", error);
        }
    };

    return (
        <div className="container">
            <h2>Add Package</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" name="package_name" placeholder="Package Name" value={formData.package_name} onChange={handleChange} required />
                <input type="number" name="package_price" placeholder="Price" value={formData.package_price} onChange={handleChange} required />

                <label>Select Photographers</label>
                <Select
                    isMulti
                    name="package_photographer"
                    options={photographerOptions}
                    value={photographerOptions.filter(option => formData.package_photographer.includes(option.value))}
                    onChange={handlePhotographerChange}
                    onFocus={() => {
                        setService("Photographer");
                    }}
                    placeholder="Select photographers..."
                    className="select-input"
                />

                <label>Select Caterer</label>
                <Select
                    isMulti
                    name="package_caterer"
                    options={catererOptions}
                    value={catererOptions.filter(option => formData.package_caterer.includes(option.value))}
                    onChange={handlePhotographerChange}
                    onFocus={() => {
                        setService("Caterer");
                    }}
                    placeholder="Select caterer..."
                    className="select-input"
                />

                <label>Select Hall</label>
                <Select
                    isMulti
                    name="package_hall"
                    options={hallOptions}
                    value={hallOptions.filter(option => formData.package_hall.includes(option.value))}
                    onChange={handlePhotographerChange}
                    onFocus={() => {
                        setService("Hall");
                    }}
                    placeholder="Select hall..."
                    className="select-input"
                />

                <label>Select Bartender</label>
                <Select
                    isMulti
                    name="package_bartender"
                    options={bartenderOptions}
                    value={bartenderOptions.filter(option => formData.package_bartender.includes(option.value))}
                    onChange={handlePhotographerChange}
                    onFocus={() => {
                        setService("Bartender");
                    }}
                    placeholder="Select bartenders..."
                    className="select-input"
                />

                <label>Select Decoration</label>
                <Select
                    isMulti
                    name="package_decoration"
                    options={decorationOptions}
                    value={decorationOptions.filter(option => formData.package_decoration.includes(option.value))}
                    onChange={handlePhotographerChange}
                    onFocus={() => {
                        setService("Decoration");
                    }}
                    placeholder="Select decorations..."
                    className="select-input"
                />


                {/* <input type="text" name="package_caterer" placeholder="Enter number of Caterer" value={formData.package_caterer} onChange={handleChange} />
                <input type="text" name="package_hall" placeholder="Enter number of Hall" value={formData.package_hall} onChange={handleChange} />
                <input type="text" name="package_bertender" placeholder="Enter number of Bartender" value={formData.package_bertender} onChange={handleChange} />
                <input type="text" name="package_decoration" placeholder="Enter number of Decoration" value={formData.package_decoration} onChange={handleChange} /> */}
                <textarea name="package_description" placeholder="Description" value={formData.package_description} onChange={handleChange} required />
                <input type="file" name="package_image" accept="image/*" onChange={handleImageChange}  />
                <button type="submit">Add Package</button>
            </form>
        </div>
    );
};

export default Package;
