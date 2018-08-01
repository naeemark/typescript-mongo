import { Request, Response } from 'express';
import Book from './../book';

// - GET - /books # returns all books
export let getBooks = (req: Request, res: Response) => {
    Book.find((err: any, books: any) => {
        if (err) {
            res.send(err);
        } else {
            res.send(books);
        }
    })
};

// - GET - /book/{1} # returns a book with id 1
export let getBook = (req: Request, res: Response) => {
    Book.findById(req.params.id, (err: any, book: any) => {
        if (err) {
            res.send(err);
        } else {
            res.send(book);
        }
    })
};

// - PUT - /book # inserts a new book into the table
export let addBook = (req: Request, res: Response) => {
    let book = new Book(req.body);

    book.save(((err: any) => {
        if (err) {
            res.send(err);
        } else {
            res.send(book);
        }
    }))
};

// - DELETE - /book/{1} # deletes a book with id of 1
export let deleteBook = (req: Request, res: Response) => {
    Book.deleteOne({ _id: req.params.id }, (err: any) => {
        if (err) {
            res.send(err);
        } else {
            res.send('Deleted Successfully')
        }
    })
};

// - POST - /book/{1} # updates a book with id of 1
export let updateBook = (req: Request, res: Response) => {
    Book.findByIdAndUpdate(req.params.id, req.body, (err: any, book: any) => {
        if (err) {
            res.send(err);
        } else {
            res.send('Updated Successfully');
        }
    })
};
