export interface ApiResponse<T> {
  success: boolean;
  response?: T;
  error?: string;
}

const API_BASE_URL = '/api';

export async function generateContent(prompt: string): Promise<string> {
  const response = await fetch(`${API_BASE_URL}/generate-content`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ prompt }),
  });

  const data: ApiResponse<string> = await response.json();
  
  if (!data.success) {
    throw new Error(data.error || 'Failed to generate content');
  }

  return data.response!;
}

export async function generateQuiz(topic: string, difficulty: 'easy' | 'medium' | 'hard'): Promise<string> {
  const response = await fetch(`${API_BASE_URL}/generate-quiz`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ topic, difficulty }),
  });

  const data: ApiResponse<string> = await response.json();
  
  if (!data.success) {
    throw new Error(data.error || 'Failed to generate quiz');
  }

  return data.response!;
}

export async function generateLearningMaterials(topic: string, type: 'materials' | 'roadmap'): Promise<string> {
  const response = await fetch(`${API_BASE_URL}/generate-materials`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ topic, type }),
  });

  const data: ApiResponse<string> = await response.json();
  
  if (!data.success) {
    throw new Error(data.error || 'Failed to generate learning materials');
  }

  return data.response!;
}

// Example to fetch all users from the database
export async function getUsers(req: Request, res: Response) {
  try {
    const result = await query('SELECT * FROM users');
    res.json(result.rows);
  } catch (error) {
    console.error('Error fetching users:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
}
