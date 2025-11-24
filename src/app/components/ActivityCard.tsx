"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { getImagePath } from "../utils/imagePath";

export interface SuggestedBy {
  name: string;
  avatar: string;
}

export interface Activity {
  id: string;
  title: string;
  message: string;
  bookingLink: string;
  studioLink: string;
  images: string[];
  suggestedBy?: SuggestedBy[];
}

interface ActivityCardProps {
  activity: Activity;
}

export default function ActivityCard({ activity }: ActivityCardProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % activity.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex(
      (prev) => (prev - 1 + activity.images.length) % activity.images.length
    );
  };

  return (
    <div className="neumorphic-card group relative">
      <div className="space-y-4">
        {/* Title */}
        <h2 className="text-2xl font-bold text-[#191E24] mb-2">
          {activity.title}
        </h2>

        {/* Image Carousel */}
        {activity.images.length > 0 && (
          <div className="relative aspect-video rounded-lg overflow-hidden neumorphic-inner">
            <Image
              src={getImagePath(activity.images[currentImageIndex])}
              alt={`${activity.title} - Image ${currentImageIndex + 1}`}
              fill
              className="object-cover"
            />

            {/* Navigation Arrows */}
            {activity.images.length > 1 && (
              <>
                <button
                  onClick={prevImage}
                  className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-[#191E24] rounded-full p-2 shadow-lg transition-all hover:scale-110 z-10"
                  aria-label="Vorheriges Bild"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.75 19.5L8.25 12l7.5-7.5"
                    />
                  </svg>
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-[#191E24] rounded-full p-2 shadow-lg transition-all hover:scale-110 z-10"
                  aria-label="Nächstes Bild"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M8.25 4.5l7.5 7.5-7.5 7.5"
                    />
                  </svg>
                </button>
              </>
            )}

            {/* Image Indicators */}
            {activity.images.length > 1 && (
              <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
                {activity.images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`h-2 rounded-full transition-all ${
                      index === currentImageIndex
                        ? "bg-white w-6"
                        : "bg-white/50 w-2 hover:bg-white/75"
                    }`}
                    aria-label={`Zu Bild ${index + 1} wechseln`}
                  />
                ))}
              </div>
            )}
          </div>
        )}

        {/* Personal Message */}
        <p className="text-[#636E7D] leading-relaxed">{activity.message}</p>

        {/* Links */}
        <div className="flex gap-3 pt-2">
          <Link
            href={activity.studioLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 neumorphic-button-secondary text-center py-2.5 px-4 rounded-lg transition-all hover:scale-[1.02]"
          >
            Studio-Info
          </Link>
          <Link
            href={activity.bookingLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 neumorphic-button text-center py-2.5 px-4 rounded-lg transition-all hover:scale-[1.02]"
          >
            Kurs
          </Link>
        </div>
      </div>

      {/* Suggested By Avatars */}
      {activity.suggestedBy && activity.suggestedBy.length > 0 && (
        <div className="mt-2 flex items-end justify-end gap-2">
          <div className="flex -space-x-2">
            {activity.suggestedBy.map((person, index) => (
              <div
                key={index}
                className=" w-10 h-10 rounded-full border-2 border-white shadow-md hover:scale-110 transition-transform cursor-pointer z-10"
                title={person.name}
              >
                <img
                  src={getImagePath(person.avatar)}
                  alt={person.name}
                  width={40}
                  height={40}
                  className="object-cover rounded-full"
                />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
