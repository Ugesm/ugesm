'use client';

import Image from 'next/image';
import { FaEnvelope, FaPhone } from 'react-icons/fa';
import { BureauMember } from '@/data/sections';

interface BureauMembersProps {
  members: BureauMember[];
}

export default function BureauMembers({ members }: BureauMembersProps) {
  const mainMembers = members.filter(member => member.isMainMember);
  const otherMembers = members.filter(member => !member.isMainMember);

  return (
    <div className="space-y-12">
      {/* Membres principaux avec photos */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {mainMembers.map((member) => (
          <div
            key={member.name}
            className="bg-white rounded-xl shadow-lg overflow-hidden transform transition duration-300 hover:scale-105"
          >
            {member.image && (
              <div className="relative h-64 w-full">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover"
                />
              </div>
            )}
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900">{member.name}</h3>
              <p className="text-green-600 font-semibold mt-1">{member.role}</p>
              <div className="mt-4 space-y-2">
                {member.email && (
                  <a
                    href={`mailto:${member.email}`}
                    className="flex items-center text-gray-600 hover:text-green-600 transition-colors"
                  >
                    <FaEnvelope className="w-5 h-5 mr-2" />
                    <span>{member.email}</span>
                  </a>
                )}
                {member.phone && (
                  <a
                    href={`tel:${member.phone}`}
                    className="flex items-center text-gray-600 hover:text-green-600 transition-colors"
                  >
                    <FaPhone className="w-5 h-5 mr-2" />
                    <span>{member.phone}</span>
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Autres membres sans photos */}
      <div className="bg-white rounded-xl shadow-lg p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-6">Autres Membres du Bureau</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {otherMembers.map((member) => (
            <div
              key={member.name}
              className="p-4 rounded-lg bg-gray-50 border border-gray-100 transform transition duration-300 hover:bg-green-50 hover:border-green-200"
            >
              <p className="font-semibold text-gray-900">{member.name}</p>
              <p className="text-green-600 text-sm mt-1">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
