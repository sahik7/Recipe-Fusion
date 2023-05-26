import { PDFDownloadLink } from '@react-pdf/renderer';
import React from 'react';
import PdfDocuments from '../../component/PdfDocuments';

const Blogs = () => {
    return (
        <div className="my-52 w-10/12 mx-auto">
            <h1 className='font-black text-4xl text-center'>Blogs</h1>
            <hr className="border-2 rounded border-[#EA572B] mx-auto w-1/12 mt-3"></hr>


            {/* download pdf */}
<div className="w-full mt-10 text-center">
<PDFDownloadLink document={<PdfDocuments/>} fileName="Blogs">{({loading}) => loading ? (<button className='px-4 py-2 bg-[#EA572B] text-white'>Loading Document ...</button>) : (<button className='px-4 py-2 bg-[#EA572B] text-white'>Download Now</button>)}</PDFDownloadLink>
</div>


            {/* first question */}
            <div className="mt-20 bg-[#f7d4ca] p-8 rounded-lg">
                <h3 className="text-xl font-bold">Tell us the differences between uncontrolled and controlled components?</h3>
                <p className="text-gray-600 mt-5">Controlled component and Uncontrolled component refers to those components which are handling the events. So in Uncontrolled components the forms element data is handed or controlled by the dom. Whereas in the controlled components the component state is used for controlling the value of the form field.</p>
            </div>
            {/* second question */}
            <div className="mt-20 bg-[#f7d4ca] p-8 rounded-lg">
                <h3 className="text-xl font-bold">How to validate React props using PropTypes?</h3>
                <p className="text-gray-600 mt-5">Firstly We have to import PropTypes from 'prop-types';
                then to check the props value we have to write the code down below.
                    <pre>
                        <code>
                            Test.propTypes = &#123; age: PropTypes.string &#125;
                        </code>
                    </pre>
                    like this we can check whether the props is a string or not.
                </p>
            </div>
            {/* third question */}
            <div className="mt-20 bg-[#f7d4ca] p-8 rounded-lg">
                <h3 className="text-xl font-bold">What is the difference between nodejs and express js ?</h3>
                <p className="text-gray-600 mt-5">
                    Nodejs is a javascript runtime built on the V8 JavaScript. It helps a developer to run the code on the server side. On the other hand  Express.js builds on top of Node.js to provide a web framework. Express.js handle the  HTTP requests and responses very efficiently. Nodejs provide low-level APIs to handle HTTP requests and responses which is not very efficient.
                </p>
            </div>
            {/* fourth question */}
            <div className="mt-20 bg-[#f7d4ca] p-8 rounded-lg">
                <h3 className="text-xl font-bold">What is a custom hook, and why will you create a custom hook?</h3>
                <p className="text-gray-600 mt-5">React provides a developer with custom hooks which enables to create a custom functionality for developer to use it across multiple components. It helps developer to avoid duplicating code.If developer want to fetch data from an API in multiple components an custom hook can be a better option. A developer can also utilize this feature to manage form state.</p>
            </div>
        </div>
    );
};

export default Blogs;