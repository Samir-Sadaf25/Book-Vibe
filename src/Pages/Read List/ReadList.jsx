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


    console.log(readList)
    return (
        <div>
            <Tabs>
                <TabList>
                    <Tab><button class="btn btn-outline">My Read List</button></Tab>
                    <Tab><button class="btn btn-outline">Wish List</button></Tab>
                </TabList>

                <TabPanel>
                    <div className="space-y-4">
                        {
                            readList.map((book, idx) => (
                                <div key={idx} className="flex flex-col md:flex-row items-start md:items-center gap-6 p-4 bg-white rounded-xl border shadow-sm">
                                    {/* Book Image */}
                                    <div className="w-24 h-auto flex-shrink-0">
                                        <img
                                            src={book.image} // Make sure this field exists
                                            alt={book.title}
                                            className="object-contain w-full h-auto rounded"
                                        />
                                    </div>

                                    {/* Book Info */}
                                    <div className="flex-1 space-y-2">
                                        <h2 className="text-lg font-semibold">{book.title}</h2>
                                        <p className="text-sm text-gray-600">By : {book.author}</p>

                                        {/* Tags & Publishing Info */}
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

                                        {/* Publisher & Page Info */}
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

                                        {/* Footer Section */}
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
                <TabPanel>
                    <h2>Any content 2</h2>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default ReadList;