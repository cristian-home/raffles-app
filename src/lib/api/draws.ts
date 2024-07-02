import type { Tables } from '@/types/supabase.db'
import { supabase } from '../supabase.client'

export const getAllDraws = async (): Promise<Tables<'draws'>[] | undefined> => {
  const { data: draws, error } = await supabase.from('draws').select('*')

  if (error) {
    throw new Error(error.message)
  }

  return draws
}

export const getDrawById = async (id: number): Promise<Tables<'draws'> | undefined> => {
  const { data: draw, error } = await supabase.from('draws').select('*').eq('id', id).single()

  if (error) {
    throw new Error(error.message)
  }

  return draw
}
