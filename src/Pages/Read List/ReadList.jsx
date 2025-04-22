import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getStoredBook } from '../../Utility/AddToDB';
import Book from '../Book/Book';
import { MapPin, User, BookOpen } from "lucide-react";

const ReadList = () => {

    const data = useLoaderData();
    const [readList, setReadList] = useState([]);
    useEffect(() => {
        const storedBookData = getStoredBook();
        const convertedStoredData = storedBookData.map(id => parseInt(id));
        const MyReadList = data.filter(book => convertedStoredData.includes(book.bookId))
        setReadList(MyReadList);


    }, [data])

    const [sort,setSort] = useState("");
    const handleSort = (type) =>{
            setSort(type)
            if (type === "ratings") {
               const sortByRating = [...readList].sort((a,b) => a.rating - b.rating)
               setReadList(sortByRating);
            }
            if (type === "pages") {
               const sortByPages = [...readList].sort((a,b) => a.totalPages - b.totalPages)
               setReadList(sortByPages);
            }
    }
    return (

        <div>

            <Tabs>

                <TabList>
                    <Tab><button className="btn btn-outline">My Read List</button></Tab>
                    
                        <div className="dropdown dropdown-bottom">
                            <div tabindex="0" role="button" className="btn m-1">sort by : {sort?sort:""} </div>
                            <ul tabindex="0" className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                                <li><a onClick={() => handleSort("pages")}>pages</a></li>
                                <li><a onClick={() => handleSort("ratings")}>ratings</a></li>
                            </ul>
                        </div>

                    
                </TabList>

                <TabPanel>
                    <div className="space-y-4">
                        {
                            readList.map((book, idx) => (
                                <div key={idx} className="flex flex-col md:flex-row items-start md:items-center gap-6 p-4 bg-white rounded-xl border shadow-sm">
                                    <div className="w-24 h-auto flex-shrink-0">
                                        <img
                                            src={book.image}
                                            alt={book.title}
                                            className="object-contain w-full h-auto rounded"
                                        />
                                    </div>


                                    <div className="flex-1 space-y-2">
                                        <h2 className="text-lg font-semibold">{book.title}</h2>
                                        <p className="text-sm text-gray-600">By : {book.author}</p>

                                        <div className="flex flex-wrap items-center gap-2 text-sm text-gray-700">
                                            <span className="bg-green-100 text-green-700 px-2 py-1 rounded-full text-xs font-medium">
                                                #{book.tags?.[0]}
                                            </span>
                                            <span className="bg-green-100 text-green-700 px-2 py-1 rounded-full text-xs font-medium">
                                                #{book.tags?.[1]}
                                            </span>
                                            <div className="flex items-center gap-1 ml-2">
                                                <MapPin className="w-4 h-4" />
                                                <span>Year of Publishing: {book.yearOfPublishing}</span>
                                            </div>
                                        </div>


                                        <div className="flex flex-wrap gap-4 text-sm text-gray-600 mt-1">
                                            <div className="flex items-center gap-1">
                                                <User className="w-4 h-4" />
                                                <span>Publisher: {book.publisher}</span>
                                            </div>
                                            <div className="flex items-center gap-1">
                                                <BookOpen className="w-4 h-4" />
                                                <span>Page : {book.totalPages}</span>
                                            </div>
                                        </div>


                                        <div className="flex flex-wrap justify-between items-center pt-3 border-t mt-3">
                                            <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">
                                                Category: {book.category}
                                            </span>
                                            <span className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-sm font-medium">
                                                Rating: {book.rating}
                                            </span>
                                            <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-1 rounded-full text-sm font-semibold ml-auto">
                                                View Details
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </TabPanel>

            </Tabs>
        </div>
    );
};

export default ReadList;