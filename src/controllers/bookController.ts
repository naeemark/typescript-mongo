import { Request, Response } from 'express';
import Book from './../book';

// - GET - /books # returns all books
export let getBooks = (req: Request, res: Response) => {
    let books = Book.find((err: any, books: any) => {
        if (err) {
            res.send(err);
        } else {
            res.send(books);
        }
    })
};


// - GET - /book/{1} # returns a book with id 1
// - POST - /book # inserts a new book into the table
// - DELETE - /book/{1} # deletes a book with id of 1
// - PUT - /book/{1} # updates a book with id of 1
