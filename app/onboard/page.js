"use client";
import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";

// Dummy data for categories, languages, and fees
const CATEGORIES = ["Singer", "DJ", "Dancer", "Speaker"];
const LANGUAGES = ["English", "Spanish", "French", "German"];
const FEES = ["< $600", "$600 - $799", "≥ $800"];

export default function OnboardArtistPage() {
  const [profileImg, setProfileImg] = useState(null);
  const { register, handleSubmit, control, reset, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    if (profileImg) data.profileImg = profileImg;
    console.log("Artist Onboarding Data:", data);
    alert("Artist submitted! Check console for data.");
    reset();
    setProfileImg(null);
  };

  return (
    <div className="max-w-2xl mx-auto mt-10 bg-card/80 rounded-2xl shadow-xl border border-border p-8 backdrop-blur-lg">
      <h2 className="text-3xl font-bold mb-6 text-center text-primary">Artist Onboarding</h2>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-6 text-foreground"
      >
        {/* Name */}
        <div>
          <label className="block font-medium mb-1 text-foreground">Name *</label>
          <Input
            {...register("name", { required: "Name is required" })}
            placeholder="Artist Name"
            className="bg-background text-foreground border-border"
          />
          {errors.name && <span className="text-red-500 text-sm">{errors.name.message}</span>}
        </div>
        {/* Bio */}
        <div>
          <label className="block font-medium mb-1 text-foreground">Bio *</label>
          <Textarea
            {...register("bio", { required: "Bio is required" })}
            placeholder="Short bio"
            rows={3}
            className="bg-background text-foreground border-border"
          />
          {errors.bio && <span className="text-red-500 text-sm">{errors.bio.message}</span>}
        </div>
        {/* Category */}
        <div>
          <label className="block font-medium mb-1 text-foreground">Category *</label>
          <Controller
            control={control}
            name="category"
            rules={{ required: "Select at least one category" }}
            render={({ field }) => (
              <div className="flex flex-wrap gap-4">
                {CATEGORIES.map((cat) => (
                  <label key={cat} className="flex items-center gap-2 text-foreground">
                    <Checkbox
                      checked={field.value?.includes(cat) || false}
                      onCheckedChange={(checked) => {
                        if (checked) {
                          field.onChange([...(field.value || []), cat]);
                        } else {
                          field.onChange((field.value || []).filter((c) => c !== cat));
                        }
                      }}
                    />
                    {cat}
                  </label>
                ))}
              </div>
            )}
          />
          {errors.category && <span className="text-red-500 text-sm">{errors.category.message}</span>}
        </div>
        {/* Languages Spoken */}
        <div>
          <label className="block font-medium mb-1 text-foreground">Languages Spoken *</label>
          <Controller
            control={control}
            name="languages"
            rules={{ required: "Select at least one language" }}
            render={({ field }) => (
              <div className="flex flex-wrap gap-4">
                {LANGUAGES.map((lang) => (
                  <label key={lang} className="flex items-center gap-2 text-foreground">
                    <Checkbox
                      checked={field.value?.includes(lang) || false}
                      onCheckedChange={(checked) => {
                        if (checked) {
                          field.onChange([...(field.value || []), lang]);
                        } else {
                          field.onChange((field.value || []).filter((l) => l !== lang));
                        }
                      }}
                    />
                    {lang}
                  </label>
                ))}
              </div>
            )}
          />
          {errors.languages && <span className="text-red-500 text-sm">{errors.languages.message}</span>}
        </div>
        {/* Fee Range */}
        <div>
          <label className="block font-medium mb-1 text-foreground">Fee Range *</label>
          <Controller
            control={control}
            name="fee"
            rules={{ required: "Fee range is required" }}
            render={({ field }) => (
              <Select value={field.value} onValueChange={field.onChange}>
                <SelectTrigger className="bg-background text-foreground border-border">
                  <SelectValue placeholder="Select Fee Range" />
                </SelectTrigger>
                <SelectContent>
                  {FEES.map((fee) => (
                    <SelectItem key={fee} value={fee}>{fee}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            )}
          />
          {errors.fee && <span className="text-red-500 text-sm">{errors.fee.message}</span>}
        </div>
        {/* Profile Image Upload */}
        <div>
          <label className="block font-medium mb-1 text-foreground">Profile Image (optional)</label>
          <Input
            type="file"
            accept="image/*"
            onChange={(e) => setProfileImg(e.target.files?.[0] || null)}
            className="bg-background text-foreground border-border"
          />
        </div>
        {/* Location */}
        <div>
          <label className="block font-medium mb-1 text-foreground">Location *</label>
          <Input
            {...register("location", { required: "Location is required" })}
            placeholder="City, Country"
            className="bg-background text-foreground border-border"
          />
          {errors.location && <span className="text-red-500 text-sm">{errors.location.message}</span>}
        </div>
        {/* Submit */}
        <Button type="submit" className="w-full font-semibold">Submit</Button>
      </form>
    </div>
  );
}