// src/components/SkillGuide.jsx
export default function SkillGuide({ skills }) {
  const getSkillTypeColor = (type) => {
    const colors = {
      passive: 'bg-yellow-900 text-yellow-300',
      skill1: 'bg-green-900 text-green-300', 
      skill2: 'bg-blue-900 text-blue-300',
      ultimate: 'bg-purple-900 text-purple-300'
    };
    return colors[type] || 'bg-gray-700 text-gray-300';
  };

  const getSkillTypeName = (type) => {
    const names = {
      passive: 'Passive',
      skill1: 'Skill 1',
      skill2: 'Skill 2', 
      ultimate: 'Ultimate'
    };
    return names[type] || type;
  };

  return (
    <div className="bg-gray-800 rounded-lg shadow-md p-6 mb-6 border border-gray-700">
      <h2 className="text-2xl font-bold text-[#ffffff] mb-4">Skills</h2>
      
      <div className="space-y-4">
        {skills.map((skill, index) => (
          <div key={index} className="border-l-4 border-[#1fab89] pl-4">
            <div className="flex items-center gap-3 mb-2">
              <h3 className="text-lg font-semibold text-[#ffffff]">
                {skill.name}
              </h3>
              <span className={`px-2 py-1 rounded text-xs font-medium ${getSkillTypeColor(skill.type)}`}>
                {getSkillTypeName(skill.type)}
              </span>
            </div>
            <p className="text-[#f0f0f0]">{skill.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}