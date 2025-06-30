"use client"

import type { Monster } from "../types/Monster"
import type { MonsterForm as MonsterFormProps } from "../types/MonsterForm"

import { useForm } from "react-hook-form"

import { Input } from "../components/ui/input"
import { Button } from "../components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from "../components/ui/form"

export function MonsterForm({ onSubmit }: MonsterFormProps) {
  const form = useForm<Monster>({
    defaultValues: {
      name: "",
      attack: 0,
      defense: 0,
      speed: 0,
      hp: 0,
      image_url: ""
    }
  })

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 max-w-md mx-auto p-4">
        {["name", "attack", "defense", "speed", "hp", "image_url"].map((field) => (
          <FormField
            key={field}
            control={form.control}
            name={field as keyof Monster}
            render={({ field: formField }) => (
              <FormItem>
                <FormLabel>
                  {field === "image_url" ? "Image URL" : field.charAt(0).toUpperCase() + field.slice(1)}
                </FormLabel>
                <FormControl>
                  <Input
                    type={["attack", "defense", "speed", "hp"].includes(field) ? "number" : "text"}
                    placeholder={`Enter ${field}`}
                    {...formField}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        ))}

        {/* Image preview (optional) */}
        {form.watch("image_url") && (
          <div className="flex justify-center mt-4">
            <img
              src={form.watch("image_url")}
              alt="Monster Preview"
              className="h-32 w-32 object-cover rounded-md border"
            />
          </div>
        )}

        <div className="text-center text-sm text-muted-foreground">
          Note: If you leave the fields empty, default monsters will be used.
        </div>

        <Button type="submit" className="w-full">Create Monster</Button>
      </form>
    </Form>
  )
}
