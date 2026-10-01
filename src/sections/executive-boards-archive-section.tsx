'use client';

import { motion } from 'framer-motion';
import { Users, Linkedin } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';

type BoardMember = { name: string; category: string };
type BoardYearData = Record<string, BoardMember[]>;

const boardData: Record<number, BoardYearData> = {
  2026: {
    President: [{ name: 'Srivarshini V', category: 'leadership' }],
    'President Special Aides': [
      { name: 'Kathirvelan M', category: 'leadership' },
      { name: 'Priyadharshini S', category: 'leadership' },
      { name: 'Ramesh M', category: 'leadership' },
      { name: 'Sai Sabari P', category: 'leadership' },
      { name: 'H R Shanjay Krishna', category: 'leadership' },
      { name: 'Naveen Bala R', category: 'leadership' },
    ],
    'Vice President': [{ name: 'Ganga Sri S', category: 'leadership' }],
    Secretary: [{ name: 'Harrshini S', category: 'leadership' }],
    'Joint Secretary': [{ name: 'Priyadarshan S', category: 'leadership' }],
    Treasurer: [{ name: 'Viveka S', category: 'leadership' }],
    'Technical Leads': [
      { name: 'Kadher Batsha S', category: 'technical' },
      { name: 'Sivanesh R', category: 'technical' },
    ],
    'Technical Coordinators': [
      { name: 'Nithish R', category: 'technical' },
      { name: 'Sharan N K', category: 'technical' },
      { name: 'Dinesh Kumar M M', category: 'technical' },
    ],
    'Non Technical Lead': [{ name: 'Thamu S', category: 'technical' }],
    'Non Technical Coordinators': [
      { name: 'Induja V', category: 'technical' },
      { name: 'Leviya', category: 'technical' },
      { name: 'Moulisha', category: 'technical' },
    ],
    'Event Management Leads': [
      { name: 'V M Balamurugan', category: 'events' },
      { name: 'Srihari J', category: 'events' },
      { name: 'Nhivedha E', category: 'events' },
    ],
    'Event Executives': [
      { name: 'Vikash K', category: 'events' },
      { name: 'Rithick', category: 'events' },
      { name: 'Ruthra V', category: 'events' },
      { name: 'Ramya Krishnan', category: 'events' },
    ],
    'Outreach Coordinators': [
      { name: 'Arikarasudhan', category: 'outreach' },
      { name: 'Harikrishnan M', category: 'outreach' },
    ],
    'Social Media Outreach': [
      { name: 'Udhaya Thara K', category: 'media' },
      { name: 'Madhumitha M', category: 'media' },
      { name: 'S A Kowshya', category: 'media' },
    ],
    'Creative Heads': [
      { name: 'V Annapoorani', category: 'creative' },
      { name: 'Sivagnana Subha', category: 'creative' },
    ],
    'Editorial Chair': [{ name: 'Ramesh P', category: 'creative' }],
    'Editorial Directors': [
      { name: 'Gowtham V', category: 'creative' },
      { name: 'Suba Shree R', category: 'creative' },
      { name: 'Jeffrey A', category: 'creative' },
    ],
    'PRO Leads': [
      { name: 'Manisha S', category: 'media' },
      { name: 'Sushma', category: 'media' },
    ],
    'Photography Team': [
      { name: 'Vignesh A S', category: 'media' },
      { name: 'Varadaraj K', category: 'media' },
    ],
    'Videography Team': [
      { name: 'Abishek Joseph J', category: 'media' },
      { name: 'Gurumanthesh S', category: 'media' },
    ],
    'Student Mentors': [
      { name: 'Akash S', category: 'leadership' },
      { name: 'Vinotha T', category: 'leadership' },
      { name: 'Anu M', category: 'leadership' },
    ],
  },
  2025: {
    President: [{ name: 'Gururaja Y', category: 'leadership' }],
    'President Special Aides': [
      { name: 'Aswin Raj', category: 'leadership' },
      { name: 'Logeshwari A', category: 'leadership' },
      { name: 'Sri Dharshana N', category: 'leadership' },
      { name: 'Vaitheeshwaran S', category: 'leadership' },
    ],
    'Vice President': [{ name: 'Thamu S', category: 'leadership' }],
    Secretary: [{ name: 'Srivarshini V', category: 'leadership' }],
    'Joint Secretary': [{ name: 'Harrshini S', category: 'leadership' }],
    Treasurer: [{ name: 'Vanipriya R', category: 'leadership' }],
    'Technical Leads': [
      { name: 'Alphin V T', category: 'technical' },
      { name: 'Gowtham V', category: 'technical' },
      { name: 'Ramesh M', category: 'technical' },
      { name: 'Ramana A', category: 'technical' },
    ],
    'Event Coordinators (Technical)': [
      { name: 'Sriram S', category: 'events' },
      { name: 'Kadher Batsha S', category: 'events' },
      { name: 'Priyadharshini S', category: 'events' },
    ],
    'Event Coordinators (Non Technical)': [
      { name: 'Naveen Bala R', category: 'events' },
      { name: 'Lavanya N', category: 'events' },
      { name: 'Annapoorani V', category: 'events' },
    ],
    'PRO Leads': [
      { name: 'Elavarasi M', category: 'media' },
      { name: 'Jithu Saaron B', category: 'media' },
    ],
    'Social Media Outreach': [
      { name: 'Sivagnana Subha G', category: 'media' },
      { name: 'Santhosh S E', category: 'media' },
    ],
    'Chief Editors': [
      { name: 'Rohith S', category: 'creative' },
      { name: 'Krishnakumar M', category: 'creative' },
    ],
    'Photography Team': [
      { name: 'Yeshwanth V', category: 'media' },
      { name: 'Ajesh A', category: 'media' },
    ],
    'Editorial Head': [{ name: 'Guhan E', category: 'creative' }],
  },
};

const boardProfileImages2026: Record<string, string> = {
  'Srivarshini V': '/sri varshini V.png',
  'Ganga Sri S': '/ganga sri S.png',
  'Kathirvelan M': '/kathirvelan M.png',
  'Priyadharshini S': '/priyatharshini S.png',
  'Naveen Bala R': '/naveen bala R.png',
  'Priyadarshan S': '/priyadarshan  S.png',
  'Ramesh M': '/ramesh M.png',
  'Sai Sabari P': '/saisabari P.png',
  'H R Shanjay Krishna': '/shanjay krishna HR.png',
  'Viveka S': '/viveka S.png',
  'Kadher Batsha S': '/kadher batsha S.png',
  'Sivanesh R': '/sivanesh R.png',
  'Nithish R': '/nithishR-new.png',
  'Dinesh Kumar M M': '/dinesh kumar MM.png',
  'Sharan N K': '/saran NK.png',
  'Thamu S': '/thamu S.png',
  'Induja V': '/induja V.png',
  Leviya: '/leviya P.png',
  Moulisha: '/moulisha R.png',
  'V M Balamurugan': '/bala murugan VM.png',
  'Srihari J': '/sri hari J.png',
  'Nhivedha E': '/nhivedha E.png',
  'Vikash K': '/vikash K.png',
  Rithick: '/rithick P.png',
  'Ruthra V': '/ruthra V.png',
  'Ramya Krishnan': '/ramya krishnan M.png',
  Arikarasudhan: '/arikarasudhan M.png',
  'Harikrishnan M': '/hari krishnan M.png',
  'Udhaya Thara K': '/udhaya thara K.png',
  'S A Kowshya': '/kowshya SA.png',
  'Madhumitha M': '/madhumitha M.png',
  'V Annapoorani': '/anna poorani V.png',
  'Sivagnana Subha': '/sivagnana suba G.png',
  'Gowtham V': '/gowtham v.png',
  'Ramesh P': '/ramesh P.png',
  'Jeffrey A': '/jeffrey A.png',
  'Suba Shree R': '/suba shree R.png',
  'Manisha S': '/manisha S.png',
  Sushma: '/sushma R.png',
  'Vignesh A S': '/vignesh AS.png',
  'Varadaraj K': '/varadaraj K.png',
  'Abishek Joseph J': '/abhishek joseph J.png',
  'Gurumanthesh S': '/gurumanthesh S.png',
  'Akash S': '/akash S.png',
  'Vinotha T': '/vinotha T.png',
  'Anu M': '/anu M.png',
  'Harrshini S': '/harshini S.png',
};

const boardProfileImages2025: Record<string, string> = {
  'Thamu S': '/thamu S.png',
  'Srivarshini V': '/sri varshini V.png',
  'Harrshini S': '/harshini S.png',
  'Gowtham V': '/gowtham v.png',
  'Ramesh M': '/ramesh M.png',
  'Kadher Batsha S': '/kadher batsha S.png',
  'Priyadharshini S': '/priyatharshini S.png',
  'Naveen Bala R': '/naveen bala R.png',
  'Annapoorani V': '/anna poorani V.png',
  'Sivagnana Subha G': '/sivagnana suba G.png',
};

const MemberCard = ({ member, index, image }: { member: BoardMember; index: number; image?: string }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.9 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 0.3, delay: index * 0.03 }}
    className="glass rounded-2xl border border-white/10 p-4 text-center hover:border-cyan-300/40 transition duration-300 hover:shadow-[0_0_30px_rgba(34,211,238,0.2)]"
  >
    <div className="mx-auto h-16 w-16 overflow-hidden rounded-full border-2 border-cyan-200/60 bg-gradient-to-br from-cyan-100 via-white to-blue-200 shadow-[0_0_24px_rgba(34,211,238,0.22)] flex items-center justify-center text-2xl font-black text-cyan-700 mb-3">
      {image ? <Image src={image} alt={`${member.name} profile`} fill sizes="64px" className="object-contain object-center mix-blend-multiply" /> : member.name.charAt(0)}
    </div>
    <h4 className="font-black text-white text-sm">{member.name}</h4>
    <div className="mt-2 flex justify-center">
      <a href="#" className="text-cyan-200 hover:text-cyan-100 transition">
        <Linkedin size={16} />
      </a>
    </div>
  </motion.div>
);

const RoleSection = ({ roleName, members, index, imageMap }: { roleName: string; members: BoardMember[]; index: number; imageMap: Record<string, string> }) => (
  <motion.div
    initial={{ opacity: 0, y: 10 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 0.4, delay: index * 0.04 }}
    className="mb-8"
  >
    <h4 className="text-lg font-black text-cyan-200 mb-4 uppercase tracking-[0.1em] text-[12px]">
      {roleName}
    </h4>
    <div className="grid gap-3 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
      {members.map((member, idx) => (
        <MemberCard key={member.name} member={member} index={idx} image={imageMap?.[member.name]} />
      ))}
    </div>
  </motion.div>
);

export function ExecutiveBoardsArchiveSection() {
  const [selectedYear, setSelectedYear] = useState(2026);
  const [expandedRoles, setExpandedRoles] = useState({});

  const years = [2026, 2025, 2027, 2028, 2029, 2030];
  const currentYearData = boardData[selectedYear];
  const isFutureYear = selectedYear > 2026;

  return (
    <section id="boards" className="relative mx-auto max-w-7xl px-4 pb-24 pt-8 md:px-8 md:pt-10">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[520px] bg-[radial-gradient(circle_at_20%_15%,_rgba(59,130,246,0.2),_transparent_42%),radial-gradient(circle_at_80%_25%,_rgba(34,211,238,0.15),_transparent_38%)]" />

      <motion.div
        initial={{ opacity: 0, y: 26 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.72 }}
        className="relative z-10 mb-14"
      >
        <div className="inline-flex items-center gap-2 rounded-full border border-blue-300/35 bg-blue-500/10 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.2em] text-blue-100">
          <Users size={12} />
          Leadership Archive
        </div>

        <h2 className="mt-5 text-3xl font-black tracking-[-0.04em] text-white sm:text-5xl">
          Executive Boards
          <span className="block text-gradient">Through The Years</span>
        </h2>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate-300 sm:text-lg">
          Meet the visionary leaders and organizers who have shaped INFOMEISTER's legacy and driven our mission forward.
        </p>
      </motion.div>

      {/* Year Selector */}
      <div className="relative z-10 mb-12 flex flex-wrap gap-2 justify-center">
        {years.map((year, idx) => (
          <motion.button
            key={year}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.3, delay: idx * 0.05 }}
            onClick={() => setSelectedYear(year)}
            className={`px-6 py-3 rounded-xl font-black text-sm uppercase tracking-[0.12em] transition-all duration-300 ${
              selectedYear === year
                ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-[0_0_30px_rgba(34,211,238,0.4)] neon-border'
                : 'glass border border-white/10 text-slate-300 hover:border-cyan-300/40 hover:text-cyan-100'
            }`}
          >
            {year}
          </motion.button>
        ))}
      </div>

      {/* Board Content */}
      {isFutureYear ? (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.6 }}
          className="relative z-10 text-center py-24"
        >
          <div className="inline-block mb-8">
            <div className="text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 animate-pulse">
              ?
            </div>
          </div>
          <h3 className="text-3xl font-black text-white mb-4">Future Executive Board</h3>
          <p className="text-slate-300 max-w-xl mx-auto text-lg">
            The Next Generation Of Innovators Will Be Revealed Here.
          </p>
          <div className="mt-8 flex justify-center gap-8">
            {[1, 2, 3].map((i) => (
              <motion.div
                key={i}
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 2, delay: i * 0.2, repeat: Infinity }}
                className="text-5xl text-cyan-400/40"
              >
                ?
              </motion.div>
            ))}
          </div>
        </motion.div>
      ) : (
        <div className="relative z-10">
          {Object.entries(currentYearData).map(([roleName, members], idx) => (
            <RoleSection
              key={roleName}
              roleName={roleName}
              members={members}
              index={idx}
              imageMap={selectedYear === 2026 ? boardProfileImages2026 : boardProfileImages2025}
            />
          ))}
        </div>
      )}
    </section>
  );
}
