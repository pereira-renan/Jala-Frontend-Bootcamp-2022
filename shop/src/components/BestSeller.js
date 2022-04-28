import React from "react"
import "./BookCard.css"

export default function BestSeller() {
  const book = {
    kind: "books#volume",
    id: "GuLZAAAAMAAJ",
    etag: "n7XuKff22P8",
    selfLink: "https://www.googleapis.com/books/v1/volumes/GuLZAAAAMAAJ",
    volumeInfo: {
      title: "The Lord of the Rings",
      authors: ["John Ronald Reuel Tolkien"],
      publisher: "William Morrow",
      publishedDate: "2004",
      description:
        "An epic depicting the Great War of the Ring, a struggle between good and evil in Middle-Earth, in which the tiny Hobbits play a key role.",
      industryIdentifiers: [
        {
          type: "OTHER",
          identifier: "PSU:000062491532",
        },
      ],
      readingModes: {
        text: false,
        image: false,
      },
      pageCount: 1157,
      printType: "BOOK",
      categories: ["Fiction"],
      averageRating: 4.5,
      ratingsCount: 51,
      maturityRating: "NOT_MATURE",
      allowAnonLogging: false,
      contentVersion: "3.1.2.0.preview.0",
      panelizationSummary: {
        containsEpubBubbles: false,
        containsImageBubbles: false,
      },
      imageLinks: {
        smallThumbnail:
          "http://books.google.com/books/content?id=GuLZAAAAMAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
        thumbnail:
          "http://books.google.com/books/content?id=GuLZAAAAMAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
      },
      language: "en",
      previewLink:
        "http://books.google.com.br/books?id=GuLZAAAAMAAJ&q=lord+of+the+rings&dq=lord+of+the+rings&hl=&cd=1&source=gbs_api",
      infoLink:
        "http://books.google.com.br/books?id=GuLZAAAAMAAJ&dq=lord+of+the+rings&hl=&source=gbs_api",
      canonicalVolumeLink:
        "https://books.google.com/books/about/The_Lord_of_the_Rings.html?hl=&id=GuLZAAAAMAAJ",
    },
    saleInfo: {
      country: "BR",
      saleability: "NOT_FOR_SALE",
      isEbook: false,
    },
    accessInfo: {
      country: "BR",
      viewability: "NO_PAGES",
      embeddable: false,
      publicDomain: false,
      textToSpeechPermission: "ALLOWED",
      epub: {
        isAvailable: false,
      },
      pdf: {
        isAvailable: false,
      },
      webReaderLink:
        "http://play.google.com/books/reader?id=GuLZAAAAMAAJ&hl=&printsec=frontcover&source=gbs_api",
      accessViewStatus: "NONE",
      quoteSharingAllowed: false,
    },
    searchInfo: {
      textSnippet:
        "An epic depicting the Great War of the Ring, a struggle between good and evil in Middle-Earth, in which the tiny Hobbits play a key role.",
    },
  }
  return (
    <>
      <div>
        <h1>Best Seller</h1>
      </div>
      <div className="bookDiv">
        <div className="bookShowcase">
          <div className="bookCard__container">
            <div className="bookCard_thumbnail__container">
              <img
                className="bookCard_thumbnail__image"
                src={
                  book.volumeInfo.imageLinks &&
                  book.volumeInfo.imageLinks.thumbnail
                }
                alt=""
              />
            </div>
            <div className="bookCard_data__container">
              <div className="bookCard_title__container">
                <div className="bookCard_title__text">
                  {book.volumeInfo.title && book.volumeInfo.title}
                </div>
                <div className="bookCard_author__text">
                  {book.volumeInfo.authors && book.volumeInfo.authors[0]}
                </div>
                <div className="bookCard_ratings__text">
                  {book.volumeInfo.averageRating == null
                    ? 0 + " stars"
                    : book.volumeInfo.averageRating + " stars"}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
