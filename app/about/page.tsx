"use client"
import type { Metadata } from "next"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { PieChart } from "@/components/PieChart"
import { LazyImage } from "@/components/LazyImage"
import { useEffect, useRef } from "react";
import { Chart } from "chart.js"; // Import the chart library if using



export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-green-100 mt-[72px]">
      <main className="container mx-auto px-4 py-8">
        <section className="mb-12 text-center">
          <h1 className="text-4xl font-bold mb-4 text-blue-600">Hello Again, I am Clancy</h1>
          <p className="text-xl mb-4">Full Stack Web and Mobile App Developer</p>
          <p className="text-lg mb-6">
            A passionate Ugandan developer crafting digital solutions that make a difference.
          </p>
          <Button className="bg-green-500 hover:bg-green-600 text-white">Get in Touch</Button>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-4 text-blue-600">My Journey</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-semibold mb-2 text-green-600">Education</h3>
              <ul className="list-disc list-inside space-y-2">
                <li>
                  Makerere University Business School (2021-2023): Bachelor's Degree in Business Administration
                  (Accounting)
                </li>
                <li>Naalya Senior Secondary School - Bweyogerere Campus (2019-2020): A-Level</li>
                <li>Seeta High School - Main Campus (2015-2018): O-Level</li>
                <li>Hillside Primary School - Naalya (2014 and below): Primary</li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-2 text-green-600">Work Experience</h3>
              <ul className="list-disc list-inside space-y-2">
                <li>Desishub Ltd: Part Accountant / Full Stack Web Developer</li>
                <li>Cosmos Agro-Tech Firm: Accountant</li>
                <li>21 Nautica Logistics Company - Nakawa: Accounting Practice</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-4 text-blue-600">Entering the Tech World</h2>
          <Card className="bg-white bg-opacity-80 backdrop-blur-lg">
            <CardContent className="p-6">
              <p className="mb-4">
                It wasn't always clear that I would end up in tech. In fact, the journey was far from smooth. I had
                always been intrigued by technology but had no idea how to translate that curiosity into real skills.
                The world of coding felt like an unreachable mountain, and I was standing at the foot of it, overwhelmed
                by the sheer magnitude of what I had to learn.
              </p>
              <p className="mb-4">
                When I first joined Desishub Ltd for coding training, I had no idea what I was getting into. The thought
                of sitting in front of a computer, writing lines of code, felt terrifying. Every day was a challenge –
                each new concept seemed like an insurmountable obstacle. It wasn't easy, and there were countless nights
                where I felt like giving up. The logic of coding seemed foreign, and debugging felt like finding a
                needle in a haystack.
              </p>
              <p className="mb-4">
                But as I pushed through, something incredible started to happen. The hard work, the long hours, the
                frustration – it all began to make sense. Slowly, I transformed from someone who was terrified of
                writing a single line of code into a passionate developer who craved the challenge. I learned not just
                the technical skills but also the resilience needed to thrive in this industry.
              </p>
              <p>
                It wasn't an easy journey, but it was a rewarding one. Today, I'm proud to call myself a Full Stack Web
                and Mobile App Developer, equipped with the skills to build digital solutions that make a difference.
              </p>
            </CardContent>
          </Card>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-4 text-blue-600">Skills</h2>
          <div className="flex justify-center">
            <PieChart />
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-4 text-blue-600">Achievements</h2>
          <Card className="bg-white bg-opacity-80 backdrop-blur-lg">
            <CardContent className="p-6">
              <ul className="list-disc list-inside space-y-2">
                <li>Successfully developed and launched 10+ websites for local businesses</li>
                <li>Implemented an e-commerce solution that increased client's online sales by 200%</li>
                <li>Optimized website performance, reducing load times by 40% on average</li>
                <li>Contributed to open-source projects, gaining recognition in the developer community</li>
              </ul>
            </CardContent>
          </Card>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-4 text-blue-600">Services</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Website Development",
              "Mobile App Development",
              "E-commerce Solutions",
              "SEO Optimization",
              "Web Performance Tuning",
              "Custom API Development",
            ].map((service, index) => (
              <Card key={index} className="bg-white bg-opacity-80 backdrop-blur-lg">
                <CardContent className="p-4">
                  <h3 className="text-xl font-semibold mb-2 text-green-600">{service}</h3>
                  <p>Providing top-notch {service.toLowerCase()} services tailored to your needs.</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="mb-12 text-center">
          <h2 className="text-3xl font-semibold mb-4 text-blue-600">Let's Connect!</h2>
          <p className="text-lg mb-6">
            Ready to bring your digital ideas to life? Let's collaborate and create something amazing together!
          </p>
          <Button className="bg-green-500 hover:bg-green-600 text-white">Contact Me</Button>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-4 text-blue-600">Personal Touch</h2>
          <Card className="bg-white bg-opacity-80 backdrop-blur-lg">
            <CardContent className="p-6">
              <p className="text-lg">
                When I'm not coding, you can find me exploring the beautiful landscapes of Uganda. I'm an avid hiker and
                nature photographer, always seeking to capture the perfect sunset or wildlife moment. This passion for
                exploration and detail translates directly into my work, where I strive to create digital experiences
                that are as breathtaking as the world around us.
              </p>
            </CardContent>
          </Card>
        </section>

        <section>
          <h2 className="text-3xl font-semibold mb-4 text-blue-600">My Referees</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { name: "Mr. Lutakome Patrick", phone: "+256 772646984" },
              { name: "Mrs. Juliet Nakanwaji", phone: "+256 782358125" },
              { name: "Mr. Ryan Patrick", phone: "+256 778 779 753" },
            ].map((referee, index) => (
              <Card key={index} className="bg-white bg-opacity-80 backdrop-blur-lg">
                <CardContent className="p-4">
                  <h3 className="text-xl font-semibold mb-2 text-green-600">{referee.name}</h3>
                  <p>{referee.phone}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </main>
    </div>
  )
}
