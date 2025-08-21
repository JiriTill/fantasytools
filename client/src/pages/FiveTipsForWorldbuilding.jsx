// client/src/pages/FiveTipsForWorldbuilding.jsx
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Footer from '../components/Footer';
import GoogleAd from '../components/GoogleAd';
import MultiplexAd from '../components/MultiplexAd';
import KoFiButton from "../components/KoFiButton";

export default function FiveTipsForWorldbuilding() {
  // Ads push
  useEffect(() => {
    const ads = document.getElementsByClassName("adsbygoogle");
    for (let i = 0; i < ads.length; i++) {
      try { (window.adsbygoogle = window.adsbygoogle || []).push({}); }
      catch (e) { console.error("Adsbygoogle error:", e); }
    }
  }, []);

  const scrollToTop = () => window.scrollTo(0, 0);

  // --- SEO constants for this post ---
  const canonical = "https://www.fantasynamecreator.com/blog/tips-for-worldbuilding";
  const siteName = "Fantasy Name Creator";
  const title = "5 Essential Tips for Worldbuilding: Create a Cohesive Fantasy World";
  const description = "Master the art of fantasy worldbuilding with our top 5 tips. Learn how to create a rich, cohesive world with consistent lore, magic systems, and naming conventions. Perfect for writers, DMs, and storytellers.";
  const ogImage = "https://www.fantasynamecreator.com/images/og-worldbuilding-image.jpg"; // swap if you have a better image
  // Full ISO-8601 datetimes with timezone (Europe/Prague is +02:00 in August)
  const datePublished = "2025-08-21T09:00:00+02:00";
  const dateModified  = "2025-08-21T12:00:00+02:00";
  const authorName = "Fantasy Name Creator Team"; // or "JTill" if you prefer

  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-900 to-gray-900 text-white">
      <main className="p-6 flex flex-col items-center pb-20">

        <Helmet>
          <html lang="en" />
          <title>{title}</title>

          {/* Canonical */}
          <link rel="canonical" href={canonical} />

          {/* Basic SEO */}
          <meta name="description" content={description} />
          <meta name="keywords" content="worldbuilding tips, fantasy world, lore creation, writing guide, naming conventions, cohesive world, storytelling, RPG worldbuilding, fantasy name generator" />
          <meta name="robots" content="index,follow" />

          {/* Open Graph / Article */}
          <meta property="og:type" content="article" />
          <meta property="og:site_name" content={siteName} />
          <meta property="og:title" content={title} />
          <meta property="og:description" content={description} />
          <meta property="og:url" content={canonical} />
          <meta property="og:image" content={ogImage} />
          <meta property="article:published_time" content={datePublished} />
          <meta property="ar
