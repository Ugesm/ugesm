'use client'

import Image from 'next/image'
import { posts } from '@/data/posts'
import { notFound } from 'next/navigation'
import { useState } from 'react'
import Link from 'next/link'
import MainLayout from '@/components/layouts/MainLayout'

export default function PostPage({ params }: { params: { id: string } }) {
  const post = posts.find(p => p.id === params.id)
  
  if (!post) {
    notFound()
  }

  const [likes, setLikes] = useState(post.likes)

  const handleLike = () => {
    setLikes(likes + 1)
  }

  return (
    <MainLayout>
      <article className="max-w-4xl mx-auto px-4 py-8">
        {/* Header */}
        <header className="mb-8">
          <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
          <div className="flex items-center justify-between text-gray-600">
            <div className="flex items-center space-x-4">
              {post.author && (
                <div className="flex items-center">
                  <div className="relative w-10 h-10 mr-3">
                    <Image
                      src={post.author.image}
                      alt={post.author.name}
                      fill
                      className="rounded-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-medium">{post.author.name}</p>
                    {post.author.role && (
                      <p className="text-sm">{post.author.role}</p>
                    )}
                  </div>
                </div>
              )}
              <time>{post.date}</time>
            </div>
            <span className="px-3 py-1 bg-[#f1af40] text-white rounded-full text-sm">
              {post.category}
            </span>
          </div>
        </header>

        {/* Featured Image */}
        <div className="relative w-full h-96 mb-8">
          <Image
            src={post.imageUrl}
            alt={post.title}
            fill
            className="rounded-lg object-cover"
          />
        </div>

        {/* Content */}
        <div className="prose max-w-none mb-8" dangerouslySetInnerHTML={{ __html: post.content }} />

        {/* Video if exists */}
        {post.videoUrl && (
          <div className="mb-8">
            <iframe
              width="100%"
              height="480"
              src={post.videoUrl}
              title="Video content"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="rounded-lg"
            ></iframe>
          </div>
        )}

        {/* Attachments */}
        {post.attachments && post.attachments.length > 0 && (
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Pièces jointes</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {post.attachments.map((attachment, index) => (
                <a
                  key={index}
                  href={attachment.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center p-4 border rounded-lg hover:bg-gray-50 transition-colors"
                >
                  {attachment.type === 'pdf' ? (
                    <svg className="w-6 h-6 text-red-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                    </svg>
                  ) : attachment.type === 'video' ? (
                    <svg className="w-6 h-6 text-blue-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                    </svg>
                  ) : (
                    <svg className="w-6 h-6 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  )}
                  <span>{attachment.title}</span>
                </a>
              ))}
            </div>
          </div>
        )}

        {/* Engagement Section */}
        <div className="flex items-center justify-between py-4 border-t">
          <button
            onClick={handleLike}
            className="flex items-center space-x-2 text-gray-600 hover:text-[#f1af40] transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
            <span>{likes} J'aime</span>
          </button>
        </div>

        {/* Navigation */}
        <div className="flex justify-center mt-8">
          <Link
            href="/posts"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-[#f1af40] hover:bg-[#d89b2c] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#f1af40]"
          >
            Retour aux articles
          </Link>
        </div>
      </article>
    </MainLayout>
  )
}
